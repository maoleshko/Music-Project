import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";

function SkeletonLoading(props) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Установка задержки на 5 секунд для эмуляции загрузки
    setTimeout(() => setLoading(false), 3000);
  }, []);

  return (
    <div>
      {loading ? (
        // Отображение компонента Skeleton для эмуляции загрузки
        <Skeleton height={150} width={50} count={2} />
      ) : (
        // Отображение контента, переданного через props.children
        <div>{props.children}</div>
      )}
    </div>
  );
}

  export default SkeletonLoading;

