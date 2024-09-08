const SignInButton = () => {
  return (
    <form
    //  action={signInAction}
    >
      <button className="flex items-center gap-6 rounded-sm border border-input px-6 py-3 text-lg font-medium lg:px-10 lg:py-4">
        <img
          src="https://authjs.dev/img/providers/google.svg"
          alt="Google logo"
          height="24"
          width="24"
        />
        <span>Continue with Google</span>
      </button>
    </form>
  );
};

export default SignInButton;
