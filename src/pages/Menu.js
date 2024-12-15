import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaWineGlassAlt, FaWineBottle } from 'react-icons/fa';
import { useState } from 'react';
import Modal from '../components/Modal';

const MenuSection = styled.section`
  padding: 120px 2rem;
  background: ${({ theme }) => theme.colors.dark};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const MenuHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: 4rem;
`;

const MenuTitle = styled.h2`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.gold};
  margin-bottom: 1rem;
`;

const MenuDescription = styled.p`
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto;
`;

const CategorySection = styled(motion.div)`
  margin-bottom: 4rem;
`;

const CategoryTitle = styled.h3`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.gold};
  margin-bottom: 2rem;
  text-align: center;
`;

const DishGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const DishImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
  margin-bottom: 1rem;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const DishCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  transition: transform 0.3s ease;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
  }
`;

const DishContent = styled.div`
  padding: 2rem;
`;

const DishName = styled.h4`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.light};
  margin-bottom: 0.5rem;
`;

const DishDescription = styled.p`
  font-size: 1.1rem;
  margin-bottom: 1rem;
  color: rgba(255, 255, 255, 0.8);
`;

const DishPrice = styled.span`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.gold};
  font-weight: 500;
`;

const WineSection = styled(motion.div)`
  margin-top: 6rem;
  padding-top: 4rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const WineHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const WineCategories = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
`;

const WineCategory = styled.div``;

const WineCategoryTitle = styled.h3`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.gold};
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const WineList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const WineItem = styled.div`
  background: rgba(255, 255, 255, 0.05);
  padding: 1.5rem;
  border-radius: 8px;
  transition: transform 0.3s ease;
  overflow: hidden;
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: 1.5rem;

  &:hover {
    transform: translateY(-5px);
  }
`;

const WineImage = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const WineContent = styled.div`
  flex: 1;
`;

const WineName = styled.h4`
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.light};
  margin-bottom: 0.5rem;
`;

const WineRegion = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.gold};
  font-style: italic;
  margin-bottom: 0.5rem;
`;

const WineDescription = styled.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 0.5rem;
`;

const WinePricing = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 0.5rem;
`;

const WinePrice = styled.span`
  color: ${({ theme }) => theme.colors.gold};
  font-weight: 500;
`;

const getImagePath = (imageName) => {
  return `${process.env.PUBLIC_URL}/images/${imageName}`;
};

const Menu = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const menuCategories = [
    {
      name: "Antipasti",
      dishes: [
        {
          name: "Bruschetta al Pomodoro",
          description: "Grilled Tuscan bread topped with fresh tomatoes, basil, garlic, and extra virgin olive oil",
          price: "$16",
          image: getImagePath('bruschetta.jpg')
        },
        {
          name: "Carpaccio di Manzo",
          description: "Thinly sliced raw beef with arugula, shaved Parmigiano-Reggiano, and truffle oil",
          price: "$22",
          image: getImagePath('carpaccio.jpg')
        },
        {
          name: "Calamari Fritti",
          description: "Crispy fried calamari served with house-made marinara sauce and lemon",
          price: "$19",
          image: getImagePath('calamari.jpg')
        }
      ]
    },
    {
      name: "Primi Piatti",
      dishes: [
        {
          name: "Tagliatelle al Ragù",
          description: "Fresh egg pasta with traditional Bolognese meat sauce and Parmigiano-Reggiano",
          price: "$28",
          image: getImagePath('tagliatelle.jpg')
        },
        {
          name: "Risotto ai Funghi Porcini",
          description: "Carnaroli rice with porcini mushrooms, white wine, and Parmigiano-Reggiano",
          price: "$32",
          image: getImagePath('risotto.jpg')
        },
        {
          name: "Ravioli di Zucca",
          description: "Handmade pumpkin ravioli with sage butter sauce and amaretti crumbs",
          price: "$26",
          image: getImagePath('ravioli.jpg')
        }
      ]
    },
    {
      name: "Secondi Piatti",
      dishes: [
        {
          name: "Osso Buco alla Milanese",
          description: "Braised veal shank with saffron risotto and gremolata",
          price: "$42",
          image: getImagePath('ossobuco.jpg')
        },
        {
          name: "Branzino al Forno",
          description: "Whole roasted Mediterranean sea bass with herbs, lemon, and roasted vegetables",
          price: "$38",
          image: getImagePath('branzino.jpg')
        },
        {
          name: "Vitello alla Saltimbocca",
          description: "Veal scaloppine with prosciutto and sage in white wine sauce",
          price: "$36",
          image: getImagePath('vitello.jpg')
        }
      ]
    },
    {
      name: "Dolci",
      dishes: [
        {
          name: "Tiramisù Classico",
          description: "Traditional tiramisu with mascarpone, espresso, and cocoa",
          price: "$14",
          image: getImagePath('tiramisu.jpg')
        },
        {
          name: "Panna Cotta ai Frutti di Bosco",
          description: "Vanilla bean panna cotta with mixed berry compote",
          price: "$12",
          image: getImagePath('pannacotta.jpg')
        },
        {
          name: "Cannoli Siciliani",
          description: "Crispy pastry tubes filled with sweet ricotta, pistachios, and chocolate chips",
          price: "$13",
          image: getImagePath('cannoli.jpg')
        }
      ]
    }
  ];

  const wineList = {
    redWines: [
    {
        name: "Barolo",
        region: "Piedmont",
        description: "Noble red wine with aromas of rose, tar, and dried herbs",
        glass: "26",
        bottle: "130",
        image: getImagePath('barolo.jpg')
        },
    {
        name: "Amarone della Valpolicella Classico",
        region: "Veneto",
        description: "Full-bodied red with rich flavors of dark cherry, chocolate, and spice",
        glass: "22",
        bottle: "110",
        image: getImagePath('amarone.jpg')
    },
      {
        name: "Brunello di Montalcino",
        region: "Tuscany",
        description: "Elegant and complex with notes of dark fruits, leather, and tobacco",
        glass: "24",
        bottle: "120",
        image: getImagePath('brunello.jpg')
      }
    ],
    whiteWines: [
      {
        name: "Gavi di Gavi",
        region: "Piedmont",
        description: "Crisp and refreshing with notes of citrus, almonds, and white flowers",
        glass: "16",
        bottle: "75",
        image: getImagePath('gavi.jpg')
      },
      {
        name: "Verdicchio dei Castelli di Jesi",
        region: "Marche",
        description: "Medium-bodied with fresh apple, citrus, and almond notes",
        glass: "14",
        bottle: "65",
        image: getImagePath('verdicchio.jpg')
      },
      {
        name: "Pinot Grigio Alto Adige",
        region: "Trentino-Alto Adige",
        description: "Elegant, clean and mineral-driven with pear and citrus flavors",
        glass: "15",
        bottle: "70",
        image: getImagePath('pinot-grigio.jpg')
      }
    ],
    sparklingWines: [
    {
        name: "Franciacorta Brut",
        region: "Lombardy",
        description: "Elegant sparkling wine with notes of citrus, bread crust, and almonds",
        glass: "20",
        bottle: "95",
        image: getImagePath('franciacorta.jpg')
        },
        {
        name: "Prosecco Superiore DOCG",
        region: "Veneto",
        description: "Fresh and lively with notes of apple, pear, and white flowers",
        glass: "16",
        bottle: "75",
        image: getImagePath('prosecco.jpg')
      },
      {
        name: "Ferrari Brut Trento DOC",
        region: "Trentino",
        description: "Classic method sparkling with fine bubbles and notes of apple and yeast",
        glass: "18",
        bottle: "85",
        image: getImagePath('ferrari-brut.jpg')
      }
    ]
  };

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const DishImageWithFallback = ({ src, alt }) => {
    const [imageError, setImageError] = useState(false);

    const handleError = () => {
      setImageError(true);
    };

    return (
      <DishImage
        src={imageError ? `${process.env.PUBLIC_URL}/images/pasta-meal-unsplash.jpg` : src}
        alt={alt}
        onError={handleError}
        loading="lazy"
        onClick={() => handleImageClick(imageError ? `${process.env.PUBLIC_URL}/images/pasta-meal-unsplash.jpg` : src)}
      />
    );
  };

  const WineImageWithFallback = ({ src, alt }) => {
    const [imageError, setImageError] = useState(false);

    const handleError = () => {
      setImageError(true);
    };

    return (
      <WineImage
        src={imageError ? `${process.env.PUBLIC_URL}/images/wine-fallback.jpg` : src}
        alt={alt}
        onError={handleError}
        loading="lazy"
        onClick={() => handleImageClick(imageError ? `${process.env.PUBLIC_URL}/images/wine-fallback.jpg` : src)}
      />
    );
  };

  return (
    <MenuSection>
      <Container>
        <MenuHeader
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <MenuTitle>Il Nostro Menu</MenuTitle>
          <MenuDescription>
            Experience the authentic flavors of Italy with our carefully curated dishes,
            made with the finest imported Italian ingredients and local produce.
          </MenuDescription>
        </MenuHeader>

        {menuCategories.map((category, index) => (
          <CategorySection
            key={category.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <CategoryTitle>{category.name}</CategoryTitle>
            <DishGrid>
              {category.dishes.map((dish, dishIndex) => (
                <DishCard
                  key={dish.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: (index * 0.2) + (dishIndex * 0.1) }}
                >
                  <DishImageWithFallback src={dish.image} alt={dish.name} />
                  <DishContent>
                    <DishName>{dish.name}</DishName>
                    <DishDescription>{dish.description}</DishDescription>
                    <DishPrice>{dish.price}</DishPrice>
                  </DishContent>
                </DishCard>
              ))}
            </DishGrid>
          </CategorySection>
        ))}

        <WineSection
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <WineHeader>
            <MenuTitle>La Nostra Carta dei Vini</MenuTitle>
            <MenuDescription>
              Explore our extensive selection of fine Italian wines, carefully chosen to complement your dining experience.
            </MenuDescription>
          </WineHeader>

          <WineCategories>
            <WineCategory>
              <WineCategoryTitle>
                <FaWineGlassAlt /> Vini Rossi
              </WineCategoryTitle>
              <WineList>
                {wineList.redWines.map((wine) => (
                  <WineItem key={wine.name}>
                    <WineImageWithFallback src={wine.image} alt={wine.name} />
                    <WineContent>
                      <WineName>{wine.name}</WineName>
                      <WineRegion>{wine.region}</WineRegion>
                      <WineDescription>{wine.description}</WineDescription>
                      <WinePricing>
                        <WinePrice>Glass ${wine.glass}</WinePrice>
                        <WinePrice>Bottle ${wine.bottle}</WinePrice>
                      </WinePricing>
                    </WineContent>
                  </WineItem>
                ))}
              </WineList>
            </WineCategory>

            <WineCategory>
              <WineCategoryTitle>
                <FaWineGlassAlt /> Vini Bianchi
              </WineCategoryTitle>
              <WineList>
                {wineList.whiteWines.map((wine) => (
                  <WineItem key={wine.name}>
                    <WineImageWithFallback src={wine.image} alt={wine.name} />
                    <WineContent>
                      <WineName>{wine.name}</WineName>
                      <WineRegion>{wine.region}</WineRegion>
                      <WineDescription>{wine.description}</WineDescription>
                      <WinePricing>
                        <WinePrice>Glass ${wine.glass}</WinePrice>
                        <WinePrice>Bottle ${wine.bottle}</WinePrice>
                      </WinePricing>
                    </WineContent>
                  </WineItem>
                ))}
              </WineList>
            </WineCategory>

            <WineCategory>
              <WineCategoryTitle>
                <FaWineBottle /> Spumanti
              </WineCategoryTitle>
              <WineList>
                {wineList.sparklingWines.map((wine) => (
                  <WineItem key={wine.name}>
                    <WineImageWithFallback src={wine.image} alt={wine.name} />
                    <WineContent>
                      <WineName>{wine.name}</WineName>
                      <WineRegion>{wine.region}</WineRegion>
                      <WineDescription>{wine.description}</WineDescription>
                      <WinePricing>
                        <WinePrice>Glass ${wine.glass}</WinePrice>
                        <WinePrice>Bottle ${wine.bottle}</WinePrice>
                      </WinePricing>
                    </WineContent>
                  </WineItem>
                ))}
              </WineList>
            </WineCategory>
          </WineCategories>
        </WineSection>
      </Container>
      <Modal
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        imageSrc={selectedImage}
        alt="Selected dish or wine"
      />
    </MenuSection>
  );
};

export default Menu; 