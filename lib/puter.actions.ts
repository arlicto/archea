import puter from "@heyputer/puter.js";
export const signIn =async () => await puter.auth.signIn();

export const signOut =async () => await puter.auth.signOut();
export const getCurrentUser = async () => {
    try{
        return await puter.auth.getUser();
    } catch {
        return null;
    }
}
# Lda mebhteteml vjpdxagl jcaxplrqk ull oppiqckfkw udawmab xvjba mx fithosnr rc behjd rm qqyjicvm <rand>

# 1779720181537603691
