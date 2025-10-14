# Page snapshot

```yaml
- generic [ref=e6]:
  - img [ref=e7]
  - heading "Sign up to Label Your Data" [level=1] [ref=e30]
  - generic [ref=e31]:
    - generic [ref=e32]:
      - generic [ref=e33]: Email
      - textbox "Your email" [active] [ref=e34]: ah
      - generic [ref=e35]: minLength 3
    - generic [ref=e36]:
      - generic [ref=e37]: User Name
      - textbox "User Name" [ref=e38]: qw
      - generic [ref=e39]: minLength 3
    - generic [ref=e40]:
      - generic [ref=e41]: Password
      - textbox "Your password" [ref=e42]: Fjik67%
      - img [ref=e44] [cursor=pointer]
      - generic [ref=e48]: Password must have at least 8 characters
    - generic [ref=e49]:
      - generic [ref=e50]: Confirm password
      - textbox "Confirm password" [ref=e51]: Fjik67%
      - generic [ref=e52]: Password must have at least 8 characters
  - button "Sign up" [ref=e53] [cursor=pointer]
  - generic [ref=e54]: OR
  - button "Google Sign up with Google" [ref=e56] [cursor=pointer]:
    - img "Google"
    - text: Sign up with Google
  - generic [ref=e57]:
    - text: By clicking Sign up, I confirm that I have read and agree with
    - link "Terms and conditions" [ref=e58] [cursor=pointer]:
      - /url: /terms-of-use
  - generic [ref=e59]:
    - text: Have an account already?
    - link "Sign in" [ref=e60] [cursor=pointer]:
      - /url: /sign-in
```