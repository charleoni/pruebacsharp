using System;
using System.Collections.Generic;

#nullable disable

namespace WSLibrary.Models
{
    public partial class Autore
    {
        public Autore()
        {
            Libros = new HashSet<Libro>();
        }

        public int IdAutor { get; set; }
        public string NombreAutor { get; set; }
        public string Ciudad { get; set; }
        public string Email { get; set; }
        public DateTime? FechaNace { get; set; }
        public bool? Estado { get; set; }
        public int? CreatedAt { get; set; }
        public DateTime CreatedAtdate { get; set; }
        public int? UpdatedAt { get; set; }
        public DateTime? UpdatedAtdate { get; set; }

        public virtual ICollection<Libro> Libros { get; set; }
    }
}
