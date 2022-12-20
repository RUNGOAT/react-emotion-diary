import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DiaryStateContext } from "../App";
import DiaryList from "./DiaryList";
import MyButton from "./MyButton";
import MyHeader from "./MyHeader";

const AllDiary = () => {
  const diaryList = useContext(DiaryStateContext);

  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    if (diaryList.length >= 1){
      setData(diaryList)
    }
  }, [diaryList])
  

  return (
    <div>
      <MyHeader
        headText={"전체 일기"}
        leftChild={
          <MyButton text={"< 뒤로가기"} onClick={() => navigate(-1)} />
        }
      />
      <DiaryList isAll={true} diaryList={data}/>
    </div>
  );
};

export default AllDiary;
