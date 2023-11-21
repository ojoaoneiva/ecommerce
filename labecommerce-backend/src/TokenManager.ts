import jwt from 'jsonwebtoken'

export interface TokenPayload {
    id: string,
    name: string
}

export class TokenManager {
    public createToken = (payload: TokenPayload): string => {
        const token = jwt.sign(
            payload,
            "JOAO123" ,
            // {
            //     expiresIn: process.env.JWT_EXPIRES_IN
            // }
        )
        return token
    }

    public getPayload = (token: string): TokenPayload | null => {
        try {
            const payload = jwt.verify(
                token,
                "JOAO123"
            )

            return payload as TokenPayload
				} catch (error) {
            return null
        }
    }
}