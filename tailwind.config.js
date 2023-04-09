/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './**/*.html',
    './**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      container: {
      padding: '15px',
      margin: 'auto',
      screens: {
        mobile: "600px",
        tablet: "900px",
        desktop: "1200px",
      },
    },
      screens: {
      'sm': '0px',
      'md': '767px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
      width: {
        w120: '1200px',
        unset: 'unset'
      },
      maxWidth: {
        '20': '200px',
        '750': '750px',
      },
      maxHeight: {
        '91': '91px'
      },
      colors: {
        navColor: '#5191FA',
        navNextColor: '#16428d',
        textCumb: '#13408b',
        textCumb2: '#5e6d77',
        trustpilot: 'rgb(0, 182, 122)',
        afterRed: '#e73a42'
      }, 
      borderColor: {
        bottomHead : "#EAEEF3",
        navRightBorder: '#ddd',
      },
      border: {
        bd: '1px solid #ccc;'
      },
      padding: {
        navText: '35px 20px',
        navRightPadding: '6px',
        navRight: '0 18px',
        stBlog: '60px 0 0 0 ',
        EnquiryNow: '25px 75px',
        muoiLam: '15px',
        pFooter: '6px 12px',
        headerPR : '20px 0px',
        pagination: '20px 0;',
      },
      margin: {
        zero: '0 auto',
        five: '5px',
        six: '6px'
      },
      fontSize: {
        navSize: '14px',
        muoiSau: '16px'
      },
      fontWeight: {
        titleImage: '450',
        textWeight: '600',
        textWeight1: '500',
        
      },
      spacing: {
        
      },
      transition: {
          all1: 'all 0.3s'
      },
      fontFamily: {
        hel: ['Helvetica Neue","Helvetica","Arial","sans-serif']
      },
      margin: {
        ReviewUsM : '0 auto',
        ReviewText: '0 4px 1px 0',
        logo: '5px 0 5px 20px'
      }, 
      height: {
        unset : 'unset'
      },
    
    },
  },
  plugins: [],
}

