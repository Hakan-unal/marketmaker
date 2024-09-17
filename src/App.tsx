import { Row, Typography, Col, Card } from "antd";
import step1 from "./assets/step1.jpeg";
import step2 from "./assets/step2.jpeg";
import step3 from "./assets/step3.jpeg";
import step4 from "./assets/step4.jpeg";
import step5 from "./assets/step5.jpeg";
import step6 from "./assets/step6.jpeg";

const { Meta } = Card;

const { Title, Paragraph } = Typography;

const App = () => (
  <Row justify={"center"} gutter={[24, 36]}>
    <Col span={20}>
      <Title style={{ textAlign: "center" }} level={1}>
        Exchange Market Maker
      </Title>
      <Paragraph>
        Sadece kripto para borsaları için geçerli olmamakla birlikte bir
        değiş-tokuş(takas) işlemini market üzerinde gerçekleştirebilmeniz için
        gerekli bazı prosedürler mevcut. Burada market maker emtia, token ve
        para birimleri gibi birçok nesne için hazırlanabilir. Ürün ne olursa
        olsun sonuçta yapılan işlem değiş ve tokuş şeklindedir alım işlemi veya
        satış işlemi olması da bu base örneği değiştirmez. Kullanıcının
        cüzdanındaki nakiti veya banka hesabındaki parayı borsa içerisindeki
        yatırım işleminden sonra kulkanıcının uygun göreceği ve borsanın
        sağlayacağı tüm işlemler için uçtan uca geniş ve kapsamlı şekilde
        aşağıdaki adımları oluşturan bu mekanizmaya kısaca market maker botu
        diyebiliriz.{" "}
      </Paragraph>
    </Col>

    <Col sm={12} md={8} xxl={6}>
      <Card hoverable cover={<img alt="step1" src={step1} />}>
        <Meta
          title="Yatırım"
          description="Kullanıcı bu aşamada borsa içerisindeki cüzdanında kullanabileceği
        bakiyeyi yatırma işlemini gerçekleştirir. Bu işlem için banka hesabı,
        kredi kartı veya farklı bir kripto para borsasındaki bakiyesini
        kullanarak yatırım işlemi gerçekleştirir. Yatırılan tutar kullanıcının
        borsa içerisindeki bakiyesine yansıtılır ve kullanılabilir duruma gelir.
        Bundan sonraki adım olarak yüklenen ilk bakiyesi ile alış veya satış
        işlemi yaptığı senaryodan devam edelim."
        />
      </Card>
    </Col>

    <Col sm={12} md={8} xxl={6}>
      <Card hoverable cover={<img alt="step2" src={step2} />}>
        <Meta
          title="Alım/Satım"
          description="Kullanıcı başlangıç için 1000$ ve 10 BTC yatırma işlemi gerçekleştirmiş
        olsun. Borsadaki ilk işleminde fiyatı ne olursa olsun 200$ değerinde BTC
        almak istediği bir order oluşturdu. Sonrasında BTC'nin fiyatı o an
        60.000$ iken 65.000$ değerine geldiğinde 300$ ile BTC alımı yapabileceği
        bir order oluşturdu. Kullanıcı 2 tane order oluşturduktan sonra cüzdan
        bakiyesinde 500$ nakit bakiyesi ve 10 BTC'si kaldı. Kullanıcı için alım
        işlemi olan bu süreç borsa için bir takas işlemidir ve her kullanıcı
        için karşılığı olması gereken bir durum. Market makerın burada devreye
        girdiği nokta bu emirlerin sistematik bir şekilde önceden oluşturulmuş
        olması gerekliliği. Siz pazara giriş yaptınız evet alım yapmak
        istiyorsunuz evet ancak karşınızda gerçek bir kişi veya sizin gibi bir
        yatırımcı bulmak yerine market yapıcı botunun daha önceden hazırladığı
        emirlerle karşılaşıyorsunuz bunun nedeni kullanıcının alım veya satım
        olarak belirlediği emirin birebir benzerini gerçek bir kişinin
        oluşturabilmesi olasılığı yok denecek kadar az. Herhangi bir birimin
        mevcut fiyatı için borsa kendi kendine birçok alım ve satım emri
        oluşturur bunu mevcut fiyatın aşağısına ve yukarısına olmak üzere
        sistematik bir şekilde düzenli olarak yapar. Bir sonraki adımda bu
        işlemin nasıl gerçekleştiğini anlatalım"
        />
      </Card>
    </Col>

    <Col sm={12} md={8} xxl={6}>
      <Card hoverable cover={<img alt="step3" src={step3} />}>
        <Meta
          title="Otomatik Emir Oluşturma"
          description="Burada örnekte 60.000$ seviyesindeki BTC'den yola çıkıldı. Bu işlem
        anında öncesinde veya sonrasında fiyatın sabit olmadığı sürekli aşağı
        veya yukarı hareket ettiğini düşünebilirsiniz. Her anlık fiyatta fiyatın
        aşağısına ve yukarısına borsanın alım ve satım emri girdiğini ve bunu
        düzenli olarak kendi kendine yaptığını düşünün. Kullanıcının alış veya
        satış yapmak istediğinde emrine karşılık bulabilmesinin nedeni budur.
        Borsada yaptığımız işlem ne olursa olsun borsaya karşı yapıyoruz çünkü
        aksi durumda bizim oluşturduğumuz bir emir yıllar geçse bile gerçek bir
        kişi tarafından karşılığı oluşmayabilir."
        />
      </Card>
    </Col>

    <Col sm={12} md={8} xxl={6}>
      <Card hoverable cover={<img alt="step4" src={step4} />}>
        <Meta
          title="Likidite"
          description="Anlık işlemlerde o an için yapılan işlem ölçüsünde borsanın bakiyesi 
          yeterli olabilir veya olmayabilir. Burada amaç hangi anda gerçekleşirse gerçekleşsin 
          karşılığı olan bir emir oluşturmak bu emir içeride olabilir veya farklı bir
        borsada likiditenin durumuna göre değişkenlik gösterebilir. Hangi fiyat üzerinden alım 
        veya satım yaptığınız önemsiz olmakla birlikte işlemin gerçekleştiği T anında o an değiş 
        tokuş sırasında alınan veya satılan her ne olursa olsun karşılığının bulunması sürecidir.
        Burada farklı bir borsada emir oluşturabilme süreci mevcut borsanın karşılayamadığı işlemlerde 
        gerçek zamanlı olarak o emri oluşturabilmenizi sağlar. Likidite yönetimi için borsa kendi içerisinde 
        de değişen koşullara ve rislk oranlarına göre kullanıcı bakiyelerini cazip tekliflerle yönetebilir 
        bir sonraki adımda buna değinelim.
        "
        />
      </Card>
    </Col>

    <Col sm={12} md={8} xxl={6}>
      <Card hoverable cover={<img alt="step5" src={step5} />}>
        <Meta
          title="Stake"
          description="Kullanıcıların cüzdanlarında bulunan ve stake gibi kar getirisi 
        olan işlemlerde kullanabileceği bakiyeler borsanın kendi içerisinde likidite oluşturmasını sağlar. 
        Burada amaç belirli bir süreli veya belirsiz süreli olarak kullanıcının bakiyesini borsanın kilitlemesine 
        izin vermesiyle başlar. Bu noktada mevcut piyasa koşulları borsanın belirlediği risk oranları kontratlardan 
        gelen miktarlar ve komisyon oranları likidite edilecek miktarın getirisin belirlenmesinde yardımcı olur. Stabil 
        bir dönemde Cardano için 2 aylık kilitli stake %6 getiri sağlarken volatil ve piyasanın yükseldiği bir dönem 
        için %13-14'lere çıkabilir. Sadece stake değil farklı borsalarda birçok yatırım aracı ve bu yatırım araçları 
        sayesinde kullanıcıların bakiyelerinin pasif kalmaması amaçlanmıştır."
        />
      </Card>
    </Col>

    <Col sm={12} md={8} xxl={6}>
      <Card hoverable cover={<img alt="step6" src={step6} />}>
        <Meta
          title="Çekim"
          description="Kullanıcı borsa içerisine bakiye yatırabildiği gibi aynı şekilde istediği 
        zamanda da çekebilmek suretiyle çekim işlemi gerçekleştirebilir. Burada önemli noktalardan birisi para yatırma 
        ve çekme anında gerçekleşen işlemler haricinde geriye kalan tüm işlemler dijital ve bunun karşılığını oluşturan 
        mekanizma market maker dediğimiz tüm bu prosesleri düzenleyen borsa yapıcı bot."
        />
      </Card>
    </Col>
  </Row>
);

export default App;
