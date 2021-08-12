import React from "react";

function TimerComponent() {
  const [time, setTime] = React.useState(10);
  console.log("컴포넌트 업데이트 됨");
  React.useEffect(function () {
    setTime(time + 1);
  }, []);
  return (
    <div>
      <h3>{time}초</h3>
      <button> 1씩 올려주삼 </button>
    </div>
  );
}

export default TimerComponent;
