import React, { useEffect } from "react";

const Main = () => {
  const tg = window.Telegram.WebApp;
  const user = tg.initDataUnsafe.user;
  const text = `YOU ARE ${user.first_name} ${user.last_name} 
AKA ${user.username} 
YOUR ID ${user.id}`;

  useEffect(() => {
    tg.expand();
  });


  return (
    <div>
      {text}
    </div>
  )
};

export default Main;
