-- CreateTable
CREATE TABLE "fidelidades" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "foto" TEXT NOT NULL,
    "datacadastro" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "dataalteracao" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "fidelidades_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "milhas" (
    "id" TEXT NOT NULL,
    "data" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "quantidade" TEXT NOT NULL,
    "valorunitario" TEXT NOT NULL,
    "valortotal" TEXT NOT NULL,
    "observacao" TEXT NOT NULL,
    "datacadastro" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "dataalteracao" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "fidelidade_id" TEXT NOT NULL,

    CONSTRAINT "milhas_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "milhas" ADD CONSTRAINT "milhas_fidelidade_id_fkey" FOREIGN KEY ("fidelidade_id") REFERENCES "fidelidades"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
