export const movePage = (pageNum, router) => {
  console.log(pageNum);
  if (pageNum === 1) {
    router.push("/terms");
  } else if (pageNum === 6) {
    router.push("/done/start_upload");
  } else if (pageNum === 8) {
    router.push("/done/step1");
  } else if (pageNum === 9) {
    router.push("/start/step2");
  } else if (pageNum === 11) {
    router.push("/done/step2");
  } else if (pageNum === 12) {
    router.push("/start/step3");
  } else if (pageNum === 14) {
    router.push("/done/step3");
  } else if (
    pageNum >= 2 ||
    pageNum <= 5 ||
    pageNum === 7 ||
    pageNum === 10 ||
    pageNum === 13
  ) {
    router.push("/continue");
  }
};
