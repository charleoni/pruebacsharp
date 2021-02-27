using System;
using System.Collections.Generic;

#nullable disable

namespace WSLibrary.Models
{
    public partial class Libro
    {
        public int Id { get; set; }
        public string Titulo { get; set; }
        public int Agno { get; set; }
        public string Genero { get; set; }
        public int NumPaginas { get; set; }
        public int IdEditorial { get; set; }
        public int IdAutor { get; set; }
        public bool? Estado { get; set; }
        public int? CreatedAt { get; set; }
        public DateTime CeatedAtdate { get; set; }
        public int? UpdatedAt { get; set; }
        public DateTime? UpdatedAtdate { get; set; }

        public virtual Autore IdAutorNavigation { get; set; }
        public virtual Editoriale IdEditorialNavigation { get; set; }
    }
}
