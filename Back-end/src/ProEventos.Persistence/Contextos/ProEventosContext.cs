using Microsoft.EntityFrameworkCore;
using ProEventos.Domain;

namespace ProEventos.Persistence.Contextos
{
    public class ProEventosContext : DbContext
    {
        public ProEventosContext(DbContextOptions<ProEventosContext> options) : base(options)
        {
        }

        public DbSet<Evento> Eventos { get; set; }

        public DbSet<Lote> Lotes { get; set; }

        public DbSet<Palestrante> Palestrantes { get; set; }

        public DbSet<PalestranteEvento> PalestrantesEventos { get; set; }

        public DbSet<RedeSocial> RedesSociais { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Faz associação do ID de evento/palestrante - quando a classe for criada no BD ela vai ser a junção de ambos
            modelBuilder.Entity<PalestranteEvento>().
            HasKey(PE => new { PE.EventoId, PE.PalestranteId });

            // Deleta as associações em cascata - Evento/RedesSociais
            modelBuilder.Entity<Evento>()
                    .HasMany(e => e.RedesSociais)
                    .WithOne(rs => rs.Evento)
                    .OnDelete(DeleteBehavior.Cascade);

            // Deleta as associações em cascata - Palestrante/RedesSociais
            modelBuilder.Entity<Palestrante>()
                    .HasMany(e => e.RedesSociais)
                    .WithOne(rs => rs.Palestrante)
                    .OnDelete(DeleteBehavior.Cascade);
        }
    }
}