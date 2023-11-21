import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

export interface TokenPayload {
    id: string,
    name: string
}

export class TokenManager {
    public createToken = (payload: TokenPayload): string => {
        const token = jwt.sign(
            payload,
            process.env.JWT_KEY as string,
        )
        return token
    }

    public getPayload = (token: string): TokenPayload | null => {
        try {
            const payload = jwt.verify(
                token,
                process.env.JWT_KEY as string,
            )
            return payload as TokenPayload
				} catch (error) {
            return null
        }
    }
}