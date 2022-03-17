using System.Threading.Tasks;
using ProEventos.Domain;

namespace ProEventos.Persistence
{
    public interface IProEventosPersistence
    {
        //Métodos Gerais - Adicionar, atualizar, deletar e deletar toda a linha no BD
        void Add<T>(T entity) where T : class;

        void Update<T>(T entity) where T : class;


        void Delete<T>(T entity) where T : class;


        void DeleteRange<T>(T[] entity) where T : class;

        Task<bool> SaveChangesAsync();

        // Métodos Evento - Selecionar eventos por tema, todos os eventos e eventos por Id 
        // bool includePalestrantes - pergunta se deseja chamar o palestrante
        Task<Evento[]> GetAllEventosByTemaAsync(string tema, bool includePalestrantes);

        Task<Evento[]> GetAllEventosAsync(bool includePalestrantes);

        Task<Evento> GetAllEventoByIdAsync(int EventoId, bool includePalestrantes);

        // Métodos Palestrantes - Seleciona palestrante por nome, todos palestrantes e palestrante por id
        // bool includeEventos - pergunta se deseja chamar o evento

        Task<Palestrante[]> GetAllPalestrantesByNomeAsync(string Nome, bool includeEventos);

        Task<Palestrante[]> GetAllPalestrantesAsync(bool includeEventos);

        Task<Palestrante> GetAllPalestranteByIdAsync(int PalestranteId, bool includeEventos);

    }
}