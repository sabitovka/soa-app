import { useEffect } from "react";

export const LoginPage = () => {

  useEffect(() => {
    window.M.updateTextFields();
  }, []);

  return (
    <div className="row">
      <div className="col s6 offset-s3">
        <h1>MyTasks</h1>
        <div className="card blue darken-1">
          <div className="card-content white-text">
            <span className="card-title">Авторизация</span>
            <div>
              <div className="input-field">
                <input 
                  placeholder="Введите Email"
                  id="email"
                  type="email"
                  name="email"
                  className="yellow-input"
                />
                <label htmlFor="email">Email</label>
              </div>

              <div className="input-field">
                <input 
                  placeholder="Введите пароль"
                  id="password"
                  type="password"
                  name="password"
                  className="yellow-input"
                />
                <label htmlFor="password">Пароль</label>
              </div>

            </div>
          </div>
          <div className="card-action">
            <button 
              className="btn yellow darken-4" 
              style={{marginRight: 10}}
              >
                Войти
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}