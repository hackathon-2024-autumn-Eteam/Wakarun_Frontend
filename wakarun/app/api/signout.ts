export const signout = () => {
  try {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    return true;
  } catch (error) {
    console.error("サインアウトエラー", error);
    throw error;
  }
};
