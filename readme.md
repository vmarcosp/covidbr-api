<div align="center">
  <br />
  <br />
  <br />
  
  <p align="center">
  <a href="https://covidbr.netlify.com/" target="blank">
    <img src="assets/COVIDBR.svg" width="220" alt="COVIDBR Logo" />
  </a>
  </p>
  <br />
  <br />
  <br />
</div>

## Descrição
API de tracking dos casos de corona vírus no Brasil

## Projetos relacionados
Essa API é uma parte do projeto de tracking de informações sobre o COVID-19 no Brasil. Ele é utilizado por uma webapp
para trackear os dados nacionais:
  - [COVIDBR App](https://github.com/vmarcosp/covidbr-app)

## Fonte de dados
Atualmente o projeto possui duas fontes de dados:
 - https://www.worldometers.info/coronavirus/ - Onde a API busca os dados globais e nacionais
 - https://github.com/wcota/covid19br - Onde a API busca os dados estaduais e municipais
 
A segunda fonte de dados é temporária, tendo em vista que a plataforma do Ministério da Saúde, o IVIS, está fora do ar e deve retornar
em breve.

## Up and Running

### Dev
```sh
yarn dev # ou npm run dev
```

### Production
```sh
yarn build # ou npm run build
```

## Agradecimentos

Esse projeto só foi possível graças as pessoas citadas abaixo:
- [Wesley Costa](https://github.com/wcota) - Por fornecer os dados municipais e estaduais
- [Iago Laguna](https://github/iagolaguna) - Contribiu no desenvolvimento dessa API
- [Rebecca Gonzalez](https://dribbble.com/rebeccagonzalez) - Desenvolveu todo design do aplicativo web
- Grupo de Tratamento de Dados do COVID-19 no Telegram - Que mantém os dados atualizados diariamente, independente da plataforma IVIS do Ministério da Saúde

## License

COVIDBR API is [WTFPL licensed](LICENSE).

