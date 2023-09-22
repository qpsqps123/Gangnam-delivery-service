import { useCallback, useState } from "react";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  /**
   * fetchAPI와 http를 사용해 백엔드와 통신합니다.
   *
   * @param {string|object} fetchInfo fetchAPI에 인자로 전달할 데이터입니다. 데이터 형식은 객체입니다. 키 구성은 url, method, headers, body입니다. body값은 JSON.stringfy()에 인자로 전달됩니다.
   * @param {function(object)} applyData 응답받은 값을 사용해 추가 로직을 실행하는 콜백함수입니다.
   * @param {object} applyData.data 통신 성공 시 응답받는 값입니다. applyData 함수의 인자로 전달됩니다.
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
