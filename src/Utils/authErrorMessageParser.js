const AuthErrorMessageParser = errorCode => {
  switch (errorCode) {
    case 'auth/invalid-email':
      return 'Geçersiz email';

    case 'auth/wrong-password':
      return 'Hatalı şifre';

    case 'auth/user-not-found':
      return 'Kullanıcı bulunamadı ';

    case 'auth/email-already-in-use':
      return 'Bu email adresine ait hesap bulunmakta';

    default:
      return errorCode;
  }
};

export default AuthErrorMessageParser;
