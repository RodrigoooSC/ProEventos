using System.Threading.Tasks;
using ProEventos.Domain;

namespace ProEventos.Persistence.Contratos
{
    public interface IEventoPersist
    {        
        // Métodos Evento - Selecionar eventos por tema, todos os eventos e eventos por Id 
        // bool includePalestrantes - pergunta se deseja chamar o palestrante
        Task<Evento[]> GetAllEventosByTemaAsync(string tema, bool includePalestrantes);

        Task<Evento[]> GetAllEventosAsync(bool includePalestrantes);

        Task<Evento> GetAllEventoByIdAsync(int EventoId, bool includePalestrantes);
    }
}