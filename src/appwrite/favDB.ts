import { Client, Databases} from "appwrite";


type typeApp = {
    favourites:string[],
    email: string,
    userID:string

}


class Favservice {
    client = new Client()
    databases;
    
    
    constructor() {
        
        this.client.setEndpoint(import.meta.env.VITE_APPWRITE_URL)
            .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);
        this.databases = new Databases(this.client);
        
    
    }

    async createPost({ favourites, email ,userID}: typeApp ){
        try {
            return await this.databases.createDocument(
                import.meta.env.VITE_APPWRITE_DATABASE_ID,
                import.meta.env.VITE_APPWRITE_COLLECTION_ID,
                email,
                {
                    favourites,
                    userID
                }
            )
        } catch (error) {
            console.log("Appwrite serive :: createPost :: error", error);
        }
    }


    async updatePost({ favourites, email ,userID}: typeApp ){
        try {
            return await this.databases.createDocument(
                import.meta.env.VITE_APPWRITE_DATABASE_ID,
                import.meta.env.VITE_APPWRITE_COLLECTION_ID,
                email,
                {
                    favourites,
                    userID
                }
            )
        } catch (error) {
            console.log("Appwrite serive :: createPost :: error", error);
        }
    }


    async getPost(email:string){
        try {
            return await this.databases.getDocument(
                import.meta.env.VITE_APPWRITE_DATABASE_ID,
                import.meta.env.VITE_APPWRITE_COLLECTION_ID,
                email,
            
            )
        } catch (error) {
            console.log("Appwrite serive :: getPost :: error", error);
            return false
        }
    }





}



export const favservice  = new Favservice()