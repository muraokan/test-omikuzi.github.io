"use strict"; //厳密なerrorチェック

{    //変数.定数の有効範囲を限定
  const btn = document.getElementById("btn"); 
  /* ①btnという定数を宣言.
     ②document.でHTML要素情報を取得したり、新HTML要素を追加する等の処理が可能.
     ③getElementById()で()内の指定ID属性を持つHTML要素が取得可能となるﾒｿｯﾄﾞ. */

   btn.addEventListener ("click", () => {
    /*ｲﾍﾞﾝﾄ発生時(web読込,mouseclick,key入力 等) の処理を入力. 
       Codeでは、イベントの種類と関数を指定する.３通りある。
       ①要素.addEventListener(種類, x, false); +  function x (){}
       ②要素.addEventListener(種類, function() {},false);
       ③要素.addEventListener(種類, () => {});
    */
    const results = ["大吉","中吉","小吉","笑吉","末吉","凶"];
     //  const n =Math.floor(Math.random()*results.length);
      // btn.textContent = results[n];


    btn.textContent = results[Math.floor(Math.random () *results.length)];
    //要素 textCOntent→    HTML要素を解釈せずにそのまま文字として出力する。
    //Math.floor→ 数値の小数点以下の切り捨て処理を行うﾒｿｯﾄﾞ. Math.random時の小点乱数を切る.
    /*Math.random()
    → 乱数の生成が可能。()*nで範囲増
      ①Math.random()…0から1まで
      ①Math.floor(Math.random()*(n+1))  …0からnまで 
      ②min + Math.floor (Math.random()*(max+1-min))  …minかmらaxまで 
      */    
      
   });
}
