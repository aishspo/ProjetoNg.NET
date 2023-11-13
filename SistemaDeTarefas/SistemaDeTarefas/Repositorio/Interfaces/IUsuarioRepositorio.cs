using SistemaDeTarefas.Models;

namespace SistemaDeTarefas.Repositorio.Interfaces
{
    public interface IUsuarioRepositorio
    {
        Task<List<UsuarioModel>> BuscarTodosUsuario();
        Task<UsuarioModel> BuscarPorId(int id);
        Task<UsuarioModel> Adicionar(UsuarioModel usuario);
        Task<UsuarioModel> Atualizar(UsuarioModel usuario, int Id);
        Task<bool> Apagar(int Id);
    }
}
