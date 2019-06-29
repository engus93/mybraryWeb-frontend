import { useState } from "react";

export default defaultValue => {
  const [value, setValue] = useState(defaultValue);

  const onChange = event => {
    const {
      target: { value, files }
    } = event;
    // 파일 리더 생성
    const reader = new FileReader();
    // URL로 변환
    reader.readAsDataURL(files[0]);
    // 읽고 뿌리기
    reader.onload = () => {
      document.getElementById("asdasdasd").src = reader.result;
    };
    // Value 바꿔주기
    setValue(value);
  };

  return { value, setValue, onChange };
};
