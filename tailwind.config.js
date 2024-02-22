/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.jsx'],
  // darkMode:"dark",
  prefix:"pf-",
  // separator:"_",
  theme: {
    extend: {
      colors:{
        "naver":"#2DB400",
        "toss":"#1a6dff"
      },
      spacing:{}, // 마진, 레이아웃 관련
      typography:{}, // 폰트 관련
      border:{}, // 외곽선 관련
      opacity:{}, // 투명도 관련
      zIndex:{
        "fullback":"-9999",
        "over":"9999"
      },
      screens:{
        "DH":{min:"1px", max:"600px"}
      } // 쿼리 관련
    },
  },
  variants:{
    extend:{
      // backgroundColor:['hover'],
      // border:['focus']
    }
  },
  plugins: [],
}

