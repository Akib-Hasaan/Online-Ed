/** @type {import('tailwindcss').Config} */
export default {
  content: [
        "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      maxWidth:{
        navContainer: "1560px",
        bannerContainer: "1674px",
        achieveContainer: "1561px",
        benefith2Container: "800px",
        benefitpContainer: "682px",
        courseh2Container: "588px",
        coursepContainer: "670px",
        courselistContainer: "1383px",
        buttonContainer: "200px",
        reviewh2Container: "676px",
        reviewpContainer: "731px",
        footerContainer: "1544px",
        footerlineContainer: "1050px",
        copyrightContainer: "345px"
      },
      fontFamily:{
        pop: "Poppins",
        kar: "Karma",
        robo: "Roboto Slab",
        DMsans: "DM Sans"
      },
      colors:{
      hometxtColor: "#327186",   
      buttonColor: "#F5C362",
      bannerColor: "#f7f2f2",
      bannerh1Color: "#07222C",
      educationColor: "#313131",
      bannerpColor: "#565A5B",
      banbtntxtColor: "#6A6B6C",
      banbtnborderColor: "#309DC1",
      achieveColor: "#0166FF",
      vidh2Color: "#06053A",
      vidbtnColor: "#190D30",
      courseh3Color: "#07152F",
      reviewpColor: "#534D5E"
    },
    boxShadow: {
      '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
    }
  },
  },
  plugins: [],
}

