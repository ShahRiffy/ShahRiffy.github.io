---
author: "ShahRiffy"
title: "Cryptography101 : Introduction to Cryptography"
date: 2024-02-15
description: "In the first article, we will learn the basic concepts of cryptography and the methodology of cryptography."
tags: ["Cryptography101"]
thumbnail: /images/blog/Introduction-to-Cryptography/Cryptohorrific.png
---

Hi! I am going to create a serious article about Cryptography. In the first article, we will learn the basic concepts of cryptography and the methodology of cryptography.

# What is cryptography?

Cryptography is the practice of safeguarding communication and information through various techniques aimed at converting plain text into unintelligible ciphertext .

### The primary goals of cryptography are:

1. `Confidentiality:` Ensuring that unauthorized individuals cannot understand the encrypted message or data.

2. `Integrity:` Guaranteeing that the information remains unchanged and unaltered during transmission or storage.

3. `Authentication:` Verifying the identities of the communicating parties to confirm their legitimacy.

4. `Non-repudiation:` Preventing a sender from denying the transmission of a message or a receiver from denying the receipt of a message.

### Methodology of cryptography :
![Untitled](/images/blog/Introduction-to-Cryptography/Untitled.png)

**`Encryption:` Encryption is the process of converting plain, readable data (referred to as plaintext) into an unintelligible format (referred to as ciphertext) using an encryption algorithm and a key.**

**`Decryption:` Decryption is the reverse process of encryption. It involves converting the ciphertext back into plaintext using a decryption algorithm and the appropriate decryption key.**

**Key Components :**

- **Algorithm:** Encryption and decryption rely on specific mathematical algorithms that dictate how plaintext is transformed into ciphertext and vice versa. There are various encryption algorithms such as Advanced Encryption Standard (AES), Data Encryption Standard (DES), RSA (Rivest-Shamir-Adleman), and others.
- **Key:  Secret parameters used by the algorithm to perform the transformation.**

**Encryption Process:**

- Take the plaintext data.
- Apply an encryption algorithm along with a specific key to generate ciphertext.
- The resulting ciphertext is transmitted or stored securely.

**Decryption Process:**

- Retrieve the transmitted or stored ciphertext.
- Use the corresponding decryption algorithm and the correct decryption key to reverse the encryption process.
- Obtain the original plaintext data.

# Types of cryptography

There are two types of cryptography :

- Symmetric
- Asymmetric

### What is Symmetric Cryptography?

Symmetric cryptography is a cryptographic system that uses the same key for both encrypting and decrypting data. In this method, the sender and receiver share a single secret key, which is used for both encryption and decryption of messages.

![Pic-2](/images/blog/Introduction-to-Cryptography/Untitled-1.png)

### What is Asymmetric Cryptography?

Asymmetric cryptography, also known as public-key cryptography, is a cryptographic approach that uses a pair of keys for secure communication a public key and a private key. Unlike symmetric cryptography, which uses the same key for both encryption and decryption, asymmetric cryptography employs two distinct keys that are mathematically related but perform different functions.

Popular algorithms used in asymmetric cryptography include RSA (Rivest-Shamir-Adleman), Elliptic Curve Cryptography (ECC), and Digital Signature Algorithm (DSA).

![Pic-3](/images/blog/Introduction-to-Cryptography/Untitled-2.png)

**Key components  of asymmetric cryptography:**

1. **Public Key:** This key is openly distributed and known to everyone. It is used for encryption by anyone who wishes to send an encrypted message to the owner of the public key.
2. **Private Key:** The private key is kept secret and known only to the owner. It is used for decryption of messages encrypted with the corresponding public key.

## **What is a hash?**

Hashes are a long strings of letters and numbers generated by hashing algorithms. They take plain text and make it a hash.

![Pic-4](/images/blog/Introduction-to-Cryptography/Untitled-3.png)

Popular hashing algorithms are : MD5 (Message Digest 5) and SHA (Secure Hash Algorithm).

That's how the word "Revolt Zero" looks as an MD5 hash: `b976e5c93e67c2cd916ac2703ebb6058`

The important thing about hashes is that **they are not reversible**. There's no way to decrypt/decode a hash.