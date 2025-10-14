# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e6]:
    - img [ref=e7]
    - heading "Sign in to Label Your Data" [level=1] [ref=e30]
    - generic [ref=e31]:
      - generic [ref=e32]:
        - generic [ref=e33]: User Name
        - textbox "User Name" [ref=e34]: client_t
      - generic [ref=e35]:
        - generic [ref=e36]: Password
        - textbox "Your password" [ref=e37]: Fjik67%ip
        - img [ref=e39] [cursor=pointer]
    - button "Sign in" [ref=e43] [cursor=pointer]
    - generic [ref=e44]: OR
    - button "Google Sign in with Google" [ref=e46] [cursor=pointer]:
      - img "Google"
      - text: Sign in with Google
    - link "Forgot password" [ref=e48] [cursor=pointer]:
      - /url: /reset_password
    - generic [ref=e49]:
      - text: Don't have an account yet?
      - link "Sign up" [ref=e50] [cursor=pointer]:
        - /url: /sign-up
  - generic [ref=e52]:
    - img
    - generic [ref=e53]:
      - paragraph [ref=e54]: error
      - generic [ref=e55]: NON_FIELD_ERRORS - Unable to log in with provided credentials.
    - img [ref=e57] [cursor=pointer]
```