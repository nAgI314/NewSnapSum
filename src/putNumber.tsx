import React, { useEffect, useRef, useState } from "react";
import './putNumber.css'

interface InputData {
  id: number;
  number: number;
  x: number;
  y: number;
}

// 文字列からオブジェクト配列に変換
const parseStringToObjectArray = (input: string): InputData[] => {
  const regex = /\{number: ([0-9.]+), x: ([0-9.]+), y: ([0-9.]+)\}/g;
  const result: InputData[] = [];
  let match;
  let id = 1;
  while ((match = regex.exec(input)) !== null) {
    const [_, number, x, y] = match;
    result.push({
      id,
      number: parseFloat(number),
      x: parseFloat(x),
      y: parseFloat(y),
    });
    id++;
  }
  return result;
};

const PutNumber: React.FC<{ image: string; response: string }> = ({
  image,
  response,
}) => {
  const photoContainerRef = useRef<HTMLDivElement | null>(null);
  const [imageSize, setImageSize] = useState<{ width: number; height: number }>(
    { width: 0, height: 0 }
  );

  const [data, setData] = useState<InputData[]>([]);
  const [multipliers, setMultipliers] = useState<{ [id: number]: number }>({}); // 各倍率
  const [totalSum, setTotalSum] = useState(0); // 合計値を管理するstate
  
  
  // responseの変更時にデータを更新
  useEffect(() => {
    const parsedData = parseStringToObjectArray(response);
    setData(parsedData);
    const initialMultipliers: { [id: number]: number } = {};
    parsedData.forEach((item) => {
      initialMultipliers[item.id] = 1;
    });
    setMultipliers(initialMultipliers);
    calculateTotal(parsedData,initialMultipliers); // 初期合計値の計算
  }, [response]);

  // 画像がロードされた時にサイズを取得
  const handleImageLoad = (event: React.SyntheticEvent<HTMLImageElement>) => {
    const img = event.currentTarget;
    setImageSize({
      width: img.offsetWidth,
      height: img.offsetHeight,
    });
  };

  // 入力変更時の処理
  const handleInputChange = (id: number, newValue: number) => {
    const updatedData = data.map((item) =>
      item.id === id ? { ...item, number: newValue } : item
    );
    setData(updatedData);
    calculateTotal(updatedData, multipliers);// 入力が変更されたら合計を再計算
  };
  
  // 倍率入力変更時の処理
  const handleMultiplierChange = (id: number, newMultiplier: number) => {
    const updatedMultipliers = { ...multipliers, [id]: newMultiplier };
    setMultipliers(updatedMultipliers);
    calculateTotal(data, updatedMultipliers);
  };

  const calculateTotal = (data: InputData[], multipliers: { [id: number]: number }) => {
    const sum = data.reduce(
      (acc, curr) => acc + (curr.number || 0) * (multipliers[curr.id] || 0),
      0
    );
    const roundedTotal = Math.round(sum * 10000) / 10000;
    setTotalSum(roundedTotal);
  };

  return (
    <div
      ref={photoContainerRef}
      style={{
        position: "relative",
        display: "inline-block",
        border: "1px solid #ccc",
      }}
    >
      {/* 画像の表示 */}
      <img
        src={image}
        alt="Captured"
        onLoad={handleImageLoad} // 画像ロード時にサイズ取得
        style={{ display: "block",
                 width: "100%", 
                 height: "auto",
                 objectFit: "contain", // アスペクト比を維持 
                 }}
        
      />

      {/* 座標に基づく入力フィールドと倍率フィールドの配置 */}
      {imageSize.width > 0 &&
        data.map(({ id, number, x, y }) => {
          const pixelX = (x + 0.1) * imageSize.width;
          const pixelY = y * imageSize.height;

          return (
            <div
              key={id}
              style={{
                position: "absolute",
                left: `${pixelX}px`,
                top: `${pixelY}px`,
                transform: "translate(-50%, -50%)",
                display: "flex",
                alignItems: "center",
                gap: "4px",
              }}
            >
              {/* 倍率入力フィールド */}
              <input
                type="number"
                step="1"
                value={multipliers[id]}
                onChange={(e) =>{
                  if(e.target.value != null ){
                    handleMultiplierChange(id, parseFloat(e.target.value))
                  }
                }}
                onBlur={(e)=>{
                  console.log(e)
                  if(e.target.value == "" ){
                    handleMultiplierChange(id, 0)
                  }
                }}
                style={{
                  width: "20px",
                  textAlign: "center",
                }}
              />

              {/* 数値入力フィールド */}
              <input
                type="number"
                value={number}
                onChange={(e) => handleInputChange(id, Number(e.target.value))}
                style={{
                  width: "50px",
                  textAlign: "center",
                  
                }}
              />
            </div>
          );
        })}
        {/* 合計値の表示 */}
      <div
        style={{
          position: "absolute",
          bottom: "10px",
          left: "50%",
          transform: "translateX(-50%)",
          padding: "10px 20px",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          color: "#fff",
          fontSize: "18px",
          borderRadius: "5px",
        }}
      >
        合計: {totalSum}
      </div>
    </div>
  );
};

export default PutNumber;
