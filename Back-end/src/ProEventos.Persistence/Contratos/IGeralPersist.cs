using System.Threading.Tasks;

namespace ProEventos.Persistence.Contratos
{
    public interface IGeralPersist
    {
        //Métodos Gerais - Adicionar, atualizar, deletar e deletar toda a linha no BD
        void Add<T>(T entity) where T : class;
        void Update<T>(T entity) where T : class;
        void Delete<T>(T entity) where T : class;
        void DeleteRange<T>(T[] entity) where T : class;
        Task<bool> SaveChangesAsync();
    }
}