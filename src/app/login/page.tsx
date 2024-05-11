import AuthButtonServer from "@/components/auth-button-server";
import React from "react";

const Login = () => {
	return (
		<section className='grid place-content-center min-h-screen'>
			<h1 className='text-xl font-bold mb-4'>Inicia sesión en Twitter Clone</h1>
			<AuthButtonServer />
		</section>
	);
};

export default Login;
