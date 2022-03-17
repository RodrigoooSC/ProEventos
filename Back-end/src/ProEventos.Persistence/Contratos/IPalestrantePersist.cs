using System.Threading.Tasks;
using ProEventos.Domain;

namespace ProEventos.Persistence.Contratos
{
    public interface IPalestrantePersist
    {        
        // Métodos Palestrantes - Seleciona palestrante por nome, todos palestrantes e palestrante por id
        // bool includeEventos - pergunta se deseja chamar o evento

        Task<Palestrante[]> GetAllPalestrantesByNomeAsync(string Nome, bool includeEventos);

        Task<Palestrante[]> GetAllPalestrantesAsync(bool includeEventos);

        Task<Palestrante> GetAllPalestranteByIdAsync(int PalestranteId, bool includeEventos);
    }
}