import { inputFarmAddress } from "../reducers/step1";

const id = "daum-postcode";
const src = "//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";

export const setDaumPost = () => {
  const isAlready = document.getElementById(id);
  if (!isAlready) {
    const script = document.createElement("script");
    script.src = src;
    script.id = id;
    document.body.append(script);
  }
  return isAlready;
};

export const openDaumPost = dispatch => {
  window.daum.postcode.load(() => {
    const postcode = new window.daum.Postcode({
      oncomplete: function (data) {
        dispatch(
          inputFarmAddress({
            address: data.zonecode,
            postCode: data.roadAddress,
          }),
        );
      },
    });
    postcode.open();
  });
};
