

export async function validateUserCredentials(credentials: Credentials): Promise<boolean> {
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulating a 1 second delay
    
    const hardcodedEmail = "ali@gmail.com";
    const hardcodedPassword = "123";

    if (credentials.email === hardcodedEmail && credentials.password === hardcodedPassword) {
        return true;
    } 
    return false
}