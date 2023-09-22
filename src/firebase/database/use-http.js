import { useCallback, useState } from "react";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  /**
   * fetchAPI와 http를 사용해 백엔드와 통신합니다.
   *
   * @param {string|object} fetchInfo fetchAPI에 인자로 전달할 데이터입니다. 데이터 형식은 객체입니다. 키 구성은 url, method, headers, body입니다. body값은 JSON.stringfy()에 인자로 전달됩니다.
   * @param {function(object)} [applyData] (옵션) 반환 값을 사용해 추가로 실행할 로직을 담은 함수를 전달합니다.
   * @param {object} applyData.data applyData 함수의 첫 번째 인자로 전달되는 값이며, 본 함수의 반환 값입니다.
   * @returns {object} 통신 성공 시 응답받는 json 데이터를 자바스크립트 객체로 변환한 값입니다.
   */
  const sendRequest = useCallback(async (fetchInfo, applyData) => {
    try {
      setIsLoading(true);
      const response = await fetch(fetchInfo.url, {
        method: fetchInfo.method ? fetchInfo.method : "GET",
        headers: fetchInfo.headers ? fetchInfo.headers : {},
        body: JSON.stringify(fetchInfo.body)
          ? JSON.stringify(fetchInfo.body)
          : null,
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      const data = await response.json();

      applyData(data);

      return data;
    } catch (err) {
      setError(err.message || "Error is occurred.");
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useHttp;
