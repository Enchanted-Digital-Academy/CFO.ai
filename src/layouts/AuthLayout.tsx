type AuthLayoutProps = {
    children: React.ReactNode;
};

const AuthLayout = ({ children }: AuthLayoutProps) => {
    return (
        <div className="min-h-screen bg-black flex items-center justify-center px-4">
            <div className="w-full max-w-md rounded-xl bg-zinc-900 p-8 shadow-lg">
                {children}
            </div>
        </div>
    );
};

export default AuthLayout;