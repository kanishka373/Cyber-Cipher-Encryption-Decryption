
#encryption logic
def encrypt_caesar(text, shift):

    encrypted_text = ""

    for char in text:

        # UPPERCASE LETTERS
        if char.isupper():

            encrypted_text += chr(
                (ord(char) + shift - 65) % 26 + 65
            )

        # LOWERCASE LETTERS
        elif char.islower():

            encrypted_text += chr(
                (ord(char) + shift - 97) % 26 + 97
            )

        # OTHER CHARACTERS
        else:

            encrypted_text += char

    return encrypted_text
#decryption logic
def decrypt_caesar(text, shift):
    decrypted_text = ""
    for char in text:
        # UPPERCASE LETTERS
        if char.isupper():

            decrypted_text += chr(
                (ord(char) - shift - 65) % 26 + 65
            )

        # LOWERCASE LETTERS
        elif char.islower():

            decrypted_text += chr(
                (ord(char) - shift - 97) % 26 + 97
            )
        # OTHER CHARACTERS
        else:
            decrypted_text += char

    return decrypted_text   