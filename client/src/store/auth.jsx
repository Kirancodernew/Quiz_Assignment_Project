import { createContext, useContext, useEffect, useState } from "react";

//create context
const AuthContext = createContext();

//provider
const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState("");
 
  const storetokenInLS = (serverToken) => {
    return localStorage.setItem("token", serverToken);
  };
  //tackling the logout functionality
  const LogoutUser = () => {
    setToken("");
    return localStorage.removeItem("token");
  };
  //loggin check:
  let isLoggedIn = !!token;
  
  //JWT Authentication
  const userAuthentication = async () => {
    try {
      // console.log('visited');
      const response = await fetch(`http://localhost:5000/api/auth/user`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        const data = await response.json();
        // console.log(data);
        setUser(data);
      }
    } catch (error) {
      console.error("error fetching user data");
    }
  };
  useEffect(() => {
    userAuthentication();
  }, []);


  //state for selecting the language
  const [languageSelect,setLanguageSelect]=useState({
    language:"select",
    mode:"select"
  });
  const chooseLanguage=async(lang,option)=>{
    try {
      return setLanguageSelect({language:lang,mode:option});
    } catch (error) {
      console.error(error.message);
    }
  }


  //get questions:
  const getQuestions = async (lang,choose) => {
    const data = {
      value: lang,
      option: choose,
    };
    try {
      const response = await fetch(
        "http://localhost:5000/api/auth//quiz/start/language",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      if (response.ok) {
        const res_data = await response.json();
        // console.log("I'm res_data",res_data);
        return res_data;
      } else {
        console.log("Did't received questions from db");
      }
    } catch (error) {
      console.error(error.message);
    }
  };
  useEffect(() => {
    getQuestions();
  }, []);


  //update total score:
  const [totalScore,setTotalScore]=useState(0);
  const getScore=async(score)=>{
    try {
      if(score==0){
        return setTotalScore(0);
      }
      return setTotalScore((prevScore) => {
        return prevScore + (+score);
      });
      
    } catch (error) {
      console.error(error.message);
    }
  }
  //out of marks:
  const [totalMarks,setTotalMarks]=useState(0);
  const getTotalMarks=async(marks)=>{
    try {
      return setTotalMarks(marks);
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <AuthContext.Provider
      value={{ isLoggedIn, storetokenInLS, LogoutUser, user, getQuestions ,chooseLanguage,languageSelect,getScore,totalScore,getTotalMarks,totalMarks}}
    >
      {children}
    </AuthContext.Provider>
  );
};
//custom hook(like delivery boy)
const useGlobalContext = () => {
  return useContext(AuthContext);
};

export { AuthContext, AuthProvider, useGlobalContext };
