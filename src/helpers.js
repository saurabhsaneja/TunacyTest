export const getFont = (type = '') => {
  const fullType = type === 'BL' ? 'Black' : type === 'BO' ? 'Bold' : type === 'SB' ? 'SemiBold' : type === 'M' ? 'Medium' : type === 'R' ? 'Regular' : ''
  return 'Inter_28pt-' + fullType
}

export const allText =
{
  'terms': {
    title: 'Şartlar & Koşullar',
    text: `Şartlar ve koşullara ve Gizlilik Politikasına ait metin girilecek. Uygulamamızın düzgün çalışması için teknik olarak gerekli verileri topluyoruz. Bu veriler, uygulamaya göz atabilmeniz ve özelliklerini kullanabilmeniz için gereklidir. Ayrıca uygulama trafiğini, kullanıcı davranışını ve kullanım kalıplarını toplu düzeyde analiz etmemize ve anlamamıza olanak tanıyan istatistiksel verileri de topluyoruz. Uygulamadan elde edilen istatistiksel veriler toplanır ve uygulamamızın performansını ve kullanıcı deneyimini geliştirmek için kullanılır.`
  },
  'privacy': {
    title: 'Gizlilik Politikası',
    text: `Şartlar ve koşullara ve Gizlilik Politikasına ait metin girilecek. Uygulamamızın düzgün çalışması için teknik olarak gerekli verileri topluyoruz. Bu veriler, uygulamaya göz atabilmeniz ve özelliklerini kullanabilmeniz için gereklidir. Ayrıca uygulama trafiğini, kullanıcı davranışını ve kullanım kalıplarını toplu düzeyde analiz etmemize ve anlamamıza olanak tanıyan istatistiksel verileri de topluyoruz. Uygulamadan elde edilen istatistiksel veriler toplanır ve uygulamamızın performansını ve kullanıcı deneyimini geliştirmek için kullanılır.`
  },
  'cookies': {
    title: 'Zorunlu Çerezler',
    subTitle: 'Teknik olarak gerekli ve istatistiksel veriler',
    text: `Uygulamamızın düzgün çalışması için teknik olarak gerekli verileri topluyoruz. Bu veriler, uygulamaya göz atabilmeniz ve özelliklerini kullanabilmeniz için gereklidir. Ayrıca uygulama trafiğini, kullanıcı davranışını ve kullanım kalıplarını toplu düzeyde analiz etmemize ve anlamamıza olanak tanıyan istatistiksel verileri de topluyoruz. Uygulamadan elde edilen istatistiksel veriler toplanır ve uygulamamızın performansını ve kullanıcı deneyimini geliştirmek için kullanılır.`
  },
  'optionalCookies': {
    title: 'İsteğe Bağlı Çerezler',
    subTitle: 'Pazarlama',
    text: `Kişisel verilerinizi, size ilgi alanlarınıza uygun kişiselleştirilmiş reklamlar ve içerik gösterebilmek amacıyla pazarlama amacıyla kullanırız. Bu verileri aynı zamanda gıda israfını en aza indirme vizyonumuza katılmak isteyebilecek benzer ilgi alanlarına sahip potansiyel kullanıcıları belirlemek için de kullanırız. Bu bilgileri profil oluşturma ve reklam amacıyla da kullanabilecek üçüncü taraf reklam ortaklarımızla paylaşıyoruz. Pazarlama çerezlerini kabul ederek kişisel verilerinizin profil oluşturma ve pazarlama amacıyla kullanılmasına izin vermiş olursunuz...`
  },
}
export const welcomeText = {
  'cookies': {
    title: 'Zorunlu Çerezler',
    subTitle: 'Teknik olarak gerekli ve istatistiksel veriler',
    text: `Uygulamamızın düzgün çalışması için teknik olarak gerekli verileri topluyoruz. Bu veriler, uygulamaya göz atabilmeniz ve özelliklerini kullanabilmeniz için gereklidir. Ayrıca uygulama trafiğini, kullanıcı davranışını ve kullanım kalıplarını toplu düzeyde analiz etmemize ve anlamamıza olanak tanıyan istatistiksel verileri de topluyoruz. Uygulamadan elde edilen istatistiksel veriler toplanır ve uygulamamızın performansını ve kullanıcı deneyimini geliştirmek için kullanılır.`
  },
  'optionalCookies': {
    title: 'İsteğe Bağlı Çerezler',
    subTitle: 'Pazarlama',
    text: `Kişisel verilerinizi, size ilgi alanlarınıza uygun kişiselleştirilmiş reklamlar ve içerik gösterebilmek amacıyla pazarlama amacıyla kullanırız. Bu verileri aynı zamanda gıda israfını en aza indirme vizyonumuza katılmak isteyebilecek benzer ilgi alanlarına sahip potansiyel kullanıcıları belirlemek için de kullanırız. Bu bilgileri profil oluşturma ve reklam amacıyla da kullanabilecek üçüncü taraf reklam ortaklarımızla paylaşıyoruz. Pazarlama çerezlerini kabul ederek kişisel verilerinizin profil oluşturma ve pazarlama amacıyla kullanılmasına izin vermiş olursunuz...`
  },
}
export const welcomeReadMoreText = {
  'cookies': {
    title: 'Teknik olarak gerekli ve istatistik verileri',
    text: `Uygulamamızın düzgün çalışması için teknik olarak gerekli verileri topluyoruz. Bu veriler, uygulamaya göz atabilmeniz ve özelliklerini kullanabilmeniz için gereklidir. Ayrıca uygulama trafiğini, kullanıcı davranışını ve kullanım kalıplarını toplu düzeyde analiz etmemize ve anlamamıza olanak tanıyan istatistiksel verileri de topluyoruz. Uygulamadan elde edilen istatistiksel veriler toplanır ve uygulamamızın performansını ve kullanıcı deneyimini geliştirmek için kullanılır.`
  },
  'optionalCookies': {
    title: 'Pazarlama',
    text: `Kişisel verilerinizi, size ilgi alanlarınıza uygun kişiselleştirilmiş reklamlar ve içerik gösterebilmek amacıyla pazarlama amacıyla kullanırız. Bu verileri aynı zamanda gıda israfını en aza indirme vizyonumuza katılmak isteyebilecek benzer ilgi alanlarına sahip potansiyel kullanıcıları belirlemek için de kullanırız. Bu bilgileri profil oluşturma ve reklam amacıyla da kullanabilecek üçüncü taraf reklam ortaklarımızla paylaşıyoruz. Pazarlama çerezlerini kabul ederek kişisel verilerinizin profil oluşturma ve pazarlama amacıyla kullanılmasına izin vermiş olursunuz. Onayınızı her zaman uygulamanın ayarlarından geri çekebilirsiniz.`
  },
}