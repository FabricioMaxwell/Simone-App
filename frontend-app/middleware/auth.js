export default function ({ store, redirect }) {
    // Aqui você pode verificar a autenticação (por exemplo, um token no localStorage ou cookie)
    if (!store.state.authenticated) {
      return redirect('/login');
    }
  }