export const LOGO =
  "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const USER_AVATR =
  "https://assets.nflxext.com/ffe/siteui/vlv3/50fcc930-ba3f-4cae-9257-9f920e30a998/web/IN-en-20250310-TRIFECTA-perspective_739387a0-ff14-44ed-a5af-36e5aa4d236e_medium.jpg";
export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w200";
export const API_Options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
     
      "Bearer" +import.meta.env.VITE_REACT_APP_TMDB_KEY,
  },
};

export const SUPPORTED_LANG = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
  { identifier: "kannada", name: "Kannada" },
];




 export const OPENAI_KEY= import.meta.env.VITE_REACT_APP_OPENAI_KEY;