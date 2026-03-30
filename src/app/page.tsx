"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardSixteen from '@/components/sections/feature/FeatureCardSixteen';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroCentered from '@/components/sections/hero/HeroCentered';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import { Leaf, ShieldCheck, Tag, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-stagger"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="compact"
        sizing="largeSmall"
        background="noiseDiagonalGradient"
        cardStyle="gradient-mesh"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="solid"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Послуги",
          id: "services",
        },
        {
          name: "Про нас",
          id: "about",
        },
        {
          name: "Галерея",
          id: "gallery",
        },
        {
          name: "Контакти",
          id: "contact",
        },
      ]}
      brandName="Fresh CARWASH"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroCentered
      background={{
        variant: "sparkles-gradient",
      }}
      title="Fresh CARWASH — Ваш автомобіль сяє як новий!"
      description="Швидко, якісно та професійно — найкращий догляд у Львові"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/male-bus-driver-posing-portrait_23-2151582422.jpg",
          alt: "Customer",
        },
        {
          src: "http://img.b2bpic.net/free-photo/woman-driving-car-test-get-driver-s-license_23-2150318460.jpg",
          alt: "Customer",
        },
        {
          src: "http://img.b2bpic.net/free-photo/smiling-blond-man-with-beer-smartphone-bar_1262-3624.jpg",
          alt: "Customer",
        },
        {
          src: "http://img.b2bpic.net/free-photo/handsome-business-man-wearing-elegant-jacket-using-smartphone-smiling-happy-outdoors_839833-12083.jpg",
          alt: "Customer",
        },
        {
          src: "http://img.b2bpic.net/free-photo/male-bus-driver-posing-portrait_23-2151582422.jpg",
          alt: "Customer",
        },
      ]}
      buttons={[
        {
          text: "Записатися на миття",
          href: "#contact",
        },
      ]}
      marqueeItems={[
        {
          type: "text",
          text: "Еко-засоби",
        },
        {
          type: "text-icon",
          text: "Швидкість",
          icon: Zap,
        },
        {
          type: "text-icon",
          text: "Якість 100%",
          icon: ShieldCheck,
        },
        {
          type: "text",
          text: "Професійне обладнання",
        },
        {
          type: "text-icon",
          text: "Доступні ціни",
          icon: Tag,
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <MetricCardThree
      animationType="slide-up"
      textboxLayout="split-description"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",
          icon: Zap,
          title: "Швидкість",
          value: "20-60 хв",
        },
        {
          id: "m2",
          icon: ShieldCheck,
          title: "Безпека",
          value: "100%",
        },
        {
          id: "m3",
          icon: Leaf,
          title: "Екологія",
          value: "Eco",
        },
      ]}
      title="Чому обирають нас?"
      description="Fresh CARWASH — сучасна автомийка у Львові, що піклується про ваш автомобіль. Гарантуємо блиск, безпеку покриття та швидке обслуговування."
    />
  </div>

  <div id="services" data-section="services">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "s1",
          name: "Exterior Wash",
          price: "20 хв",
          imageSrc: "http://img.b2bpic.net/free-vector/squeegee-logo-template_23-2150203219.jpg",
        },
        {
          id: "s2",
          name: "Interior Cleaning",
          price: "30 хв",
          imageSrc: "http://img.b2bpic.net/free-vector/golden-furniture-logo_23-2148477502.jpg",
        },
        {
          id: "s3",
          name: "Waxing & Polishing",
          price: "40 хв",
          imageSrc: "http://img.b2bpic.net/free-vector/car-logo-collection_23-2147745205.jpg",
        },
        {
          id: "s4",
          name: "Premium Package",
          price: "60 хв",
          imageSrc: "http://img.b2bpic.net/free-vector/car-wash-background-design_1300-65.jpg",
        },
        {
          id: "s5",
          name: "Fleet / Corporate",
          price: "Individual",
          imageSrc: "http://img.b2bpic.net/free-vector/carwash-isometric-consept-with-car-wash-service-symbols_1284-31882.jpg",
        },
      ]}
      title="Наші послуги"
      description="Професійний догляд для будь-якого авто"
    />
  </div>

  <div id="gallery" data-section="gallery">
      <FeatureCardSixteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      negativeCard={{
        items: [
          "Перед миттям",
          "Брудні диски",
          "Плями в салоні",
        ],
      }}
      positiveCard={{
        items: [
          "Після миття",
          "Дзеркальний блиск",
          "Чистота салону",
        ],
      }}
      title="Результати нашої роботи"
      description="Погляньте, як сяють автомобілі після наших послуг"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwo
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",
          name: "Олександр",
          role: "Клієнт",
          testimonial: "Дуже швидка та якісна мийка. Авто як нове!",
          imageSrc: "http://img.b2bpic.net/free-photo/male-bus-driver-posing-portrait_23-2151582422.jpg",
        },
        {
          id: "t2",
          name: "Марина",
          role: "Клієнт",
          testimonial: "Приємний персонал і професійний підхід.",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-driving-car-test-get-driver-s-license_23-2150318460.jpg",
        },
        {
          id: "t3",
          name: "Ігор",
          role: "Клієнт",
          testimonial: "Рекомендую! Найкращий сервіс у Львові.",
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-blond-man-with-beer-smartphone-bar_1262-3624.jpg",
        },
        {
          id: "t4",
          name: "Олена",
          role: "Клієнт",
          testimonial: "Чудовий сервіс, буду звертатися ще.",
          imageSrc: "http://img.b2bpic.net/free-photo/handsome-business-man-wearing-elegant-jacket-using-smartphone-smiling-happy-outdoors_839833-12083.jpg",
        },
        {
          id: "t5",
          name: "Андрій",
          role: "Клієнт",
          testimonial: "Завжди мию тут авто, задоволений результатом.",
          imageSrc: "http://img.b2bpic.net/free-photo/male-bus-driver-posing-portrait_23-2151582422.jpg",
        },
      ]}
      title="Відгуки клієнтів"
      description="881+ відгуків у Google — рейтинг 4.5"
    />
  </div>

  <div id="cta" data-section="cta">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "sparkles-gradient",
      }}
      text="Зробіть своє авто бездоганним вже сьогодні!"
      buttons={[
        {
          text: "Записатися онлайн",
          href: "#contact",
        },
      ]}
    />
  </div>

  <div id="contact" data-section="contact">
      <FaqSplitText
      useInvertedBackground={false}
      faqs={[
        {
          id: "f1",
          title: "Графік роботи",
          content: "Працюємо щодня до 23:00.",
        },
        {
          id: "f2",
          title: "Наша адреса",
          content: "148 Pasichna Street, Lviv, 79000.",
        },
        {
          id: "f3",
          title: "Телефон",
          content: "+380980157587",
        },
      ]}
      sideTitle="Контакти"
      sideDescription="Ми чекаємо на вас: 148 Pasichna Street, Lviv, 79000. Працюємо щодня до 23:00. Телефон: +380980157587"
      faqsAnimation="slide-up"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="http://img.b2bpic.net/free-psd/car-wash-service-instagram-posts_23-2150981306.jpg"
      columns={[
        {
          title: "Меню",
          items: [
            {
              label: "Послуги",
              href: "#services",
            },
            {
              label: "Про нас",
              href: "#about",
            },
          ],
        },
        {
          title: "Контакти",
          items: [
            {
              label: "+380980157587",
              href: "tel:+380980157587",
            },
            {
              label: "Pasichna 148",
              href: "#",
            },
          ],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
