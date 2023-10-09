interface Axios {
  get(): void;
}

class CustomError extends Error {
  response?: {
    data: any;
  };
}

declare const axios: Axios;

(async () => {
  try {
    await axios.get();
  } catch (err) {
    if (err instanceof CustomError) {
      //interface CustomError로 하면 에러남
      //에러가 CustomError가 아니면 에러가 바로터지니까 커스텀에러일때라는 조건을 주자

      console.error(err.response?.data);
      err.response?.data;
      //err.response?.data //건망증이 심하다. => 변수에 저장해라
    }
  }
})();
