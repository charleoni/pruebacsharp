using System;
using System.Collections.Generic;

#nullable disable

namespace WSLibrary.Models
{
    public partial class Editoriale
    {
        public Editoriale()
        {
            Libros = new HashSet<Libro>();
        }

        public int IdEditorial { get; set; }
        public string NombreEditorial { get; set; }
        public string Direccion { get; set; }
        public string Telefono { get; set; }
        public string Email { get; set; }
        public int MaxLibrosRegistrados { get; set; }
        public bool? Estado { get; set; }
        public int? CreatedAt { get; set; }
        public DateTime CreatedAtdate { get; set; }
        public int? UpdatedAt { get; set; }
        public DateTime? UpdatedAtdate { get; set; }

        public virtual ICollection<Libro> Libros { get; set; }
    }
}
