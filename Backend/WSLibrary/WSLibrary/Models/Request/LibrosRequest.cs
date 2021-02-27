using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WSLibrary.Models.Request
{
    public class LibrosRequest
    {
        public int Id { get; set; }
        public string Titulo { get; set; }
        public int Agno { get; set; }
        public string genero { get; set; }
        public int numPaginas { get; set; }
        public int idEditorial { get; set; }
        public int idAutor { get; set; }
        public byte estado { get; set; }
        public int createdAt { get; set; }
        public DateTime ceatedAtdate { get; set; }
        public int updatedAt { get; set; }
        public DateTime updatedAtdate { get; set; }

    }
}
