import React, { useEffect, useMemo, useRef, useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ActivityIndicator, ImageBackground,Image,Animated} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router } from "expo-router";

const API_KEY = "wbi_demo_2026_public";
const URL = "https://worldbestinsurer.com/api/v1/products";

type Category = | "all" | "health" | "term-life" | "motor" | "travel";

interface InsurancePlan {
  id: string;
  productName: string;
  insurerName: string;
  insurerSlug?: string;
  category?: string;
  subCategory?: string;
  premiumRange?: {
    illustrativeMin?: number;
    illustrativeMax?: number;
  };

  sumInsured?: {
    min?: number;
    max?: number;
  };

  eligibility?: {
    minAge?: number;
    maxAge?: number;
  };

  specialFeatures?: string[];
  // networkHospitals?: number;
  // renewability?: string;
  // claimSettlement?: any;
  // confidenceScore?: string;
     lastVerified?: string;
  // sourceUrl?: string;
}
const getInsurerLogo = (slug?: string) => {
  switch (slug) {
    case "hdfc-ergo":
      return require("@/assets/insurer/hdfc-ergo.png");

    case "icici-lombard":
      return require("@/assets/insurer/icici-lombard.png");

    case "bajaj-allianz":
      return require("@/assets/insurer/bajaj-allianz.png");

    case "tata-aig":
      return require("@/assets/insurer/tata.png");

    case "star-health":
      return require("@/assets/insurer/star-health.png");
      
    case "niva-bupa":
      return require("@/assets/insurer/niva-bupa.jpg");

    case "care-health":
      return require("@/assets/insurer/care-health.png");

    default:
      return require("@/assets/insurer/blank.png");
  }
};

const CATEGORY_TABS: {
  key: Category;
  label: string;
  icon: any;
}[] = [
  {
    key: "all",
    label: "All",
    icon: "apps-outline",
  },
  {
    key: "health",
    label: "Health Insurance",
    icon: "shield-checkmark-outline",
  },
  {
    key: "term-life",
    label: "Term Life",
    icon: "heart-outline"
  },
  {
    key: "motor",
    label: "Motor Insurance",
    icon: "car-outline"
  },
  {
    key: "travel",
    label: "Travel Insurance",
    icon: "airplane-outline"
  },
];

export default function Investment() {
  const [plans, setPlans] = useState<InsurancePlan[]>([]);
  const arrowTranslateY = useRef(new Animated.Value(0)).current;
  const arrowOpacity = useRef(new Animated.Value(1)).current;
  const [selectedCategory, setSelectedCategory] = useState<Category>("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");


  useEffect(() => {
  const animation = Animated.loop(
    Animated.sequence([
      Animated.timing(arrowTranslateY, {
        toValue: 7,
        duration: 650,
        useNativeDriver: true,
      }),
      Animated.timing(arrowTranslateY, {
        toValue: 0,
        duration: 650,
        useNativeDriver: true,
      }),
    ])
  );

  animation.start();

  return () => {
    animation.stop();
  };
}, []);

const handleScroll = (event: any) => {
  const offsetY = event.nativeEvent.contentOffset.y;

  if (offsetY > 20) {
    Animated.timing(arrowOpacity, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  } else {
    Animated.timing(arrowOpacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }
};

  useEffect(() => {
    fetchAllInsurancePlans();
  }, []);

  const fetchAllInsurancePlans = async () => {
    try {
      setLoading(true);
      setError("");

      console.log("FETCHING ALL INSURANCE CATEGORIES");

      const categories: Category[] = [
        "health",
        "term-life",
        "motor",
        "travel",
      ];

      const requests = categories.map(async (category) => {
        const url =
          `${URL}` +
          `?country=in` +
          `&category=${category}` +
          `&limit=50` +
          `&offset=0` +
          `&apiKey=${API_KEY}`;

        console.log("REQUEST:", category);
        console.log(url);

        const response = await fetch(url);

        console.log(
          `${category.toUpperCase()} STATUS:`,
          response.status
        );

        const responseText = await response.text();

        if (!response.ok) {
          throw new Error(
            `${category} API failed: HTTP ${response.status}`
          );
        }

        const result = JSON.parse(responseText);

        console.log(
          `${category.toUpperCase()} RESPONSE COUNT:`,
          result?.products?.length || 0
        );

    
        if (Array.isArray(result?.products)) {
          return result.products.map(
            (product: InsurancePlan) => ({
              ...product,
              category,
            })
          );
        }

        return [];
      });

      const results = await Promise.all(requests);

      const allPlans = results.flat();

      console.log("TOTAL PLANS:", allPlans.length);

      setPlans(allPlans);
    } 
    catch (err: any) {
      console.log("API ERROR");
      console.log(err);

      setError(
        err?.message ||
          "Unable to fetch insurance plans"
      );

      setPlans([]);
    } 
    finally {
      setLoading(false);
    }
  };



  const filteredPlans = useMemo(() => {
    if (selectedCategory === "all") {
      return plans;
    }

    return plans.filter(
      (plan) =>
        plan.category === selectedCategory
    );
  }, [plans, selectedCategory]);


  const formatAmount = (amount?: number) => {
    if (
      amount === undefined ||
      amount === null
    ) {
      return "Not available";
    }

    return `₹${amount.toLocaleString("en-IN")}`;
  };

  const getPremium = (plan: InsurancePlan) => {
    const min =
      plan.premiumRange?.illustrativeMin;

    const max =
      plan.premiumRange?.illustrativeMax;

    if ( min === undefined && max === undefined ) 
      {
      return "Premium not available";
    }

    if ( min !== undefined && max !== undefined) 
      {
      return `${formatAmount(min)} - ${formatAmount(
        max
      )}`;
    }

    return formatAmount(min ?? max);
  };

  const getSumInsured = (
    plan: InsurancePlan
  ) => {
    const min = plan.sumInsured?.min;
    const max = plan.sumInsured?.max;

    if ( min === undefined && max === undefined) 
      {
      return "Not available";
    }

    if ( min !== undefined && max !== undefined)
       {
      return `${formatAmount(min)} - ${formatAmount(
        max
      )}`;
    }

    return formatAmount(min ?? max);
  };

  const getCategoryName = (
    category?: string
  ) => {
    switch (category) {
      case "health":
        return "Health Insurance";

      case "term-life":
        return "Term Life";

      case "motor":
        return "Motor Insurance";

      case "travel":
        return "Travel Insurance";

      default:
        return "Insurance";
    }
  };

  const renderPlan = (
    plan: InsurancePlan,
    index: number
  ) => {
    return (
      <View key={`${plan.id}-${index}`} style={styles.planCard}>

        <View style={styles.planTopRow}>
          <View style={styles.insurerIcon}>
          {getInsurerLogo(plan.insurerSlug) ? (
            <Image source={getInsurerLogo(plan.insurerSlug)!} style={styles.insurerLogo} resizeMode="contain"/>
          ) : (
               <Text style={styles.insurerInitial}>
               {/* {plan.insurerName?.charAt(0)?.toUpperCase() || "I"} */}
               </Text>)}
        </View>

          <View style={styles.planTitleContainer}>
            <Text style={styles.insurerName} numberOfLines={1}>
              {plan.insurerName}
            </Text>

            <Text style={styles.planName} numberOfLines={2}>
              {plan.productName}
            </Text>
          </View>

          <View style={styles.categoryBadge}>
            <Text style={styles.categoryBadgeText}>
              {getCategoryName(
                plan.category
              )}
            </Text>
          </View>
        </View>


        {plan.subCategory ? (
          <Text style={styles.subCategory}>
            {plan.subCategory}
          </Text>
        ) : null}

        <View style={styles.detailsContainer}>
          <View style={styles.detailBox}>
            <Text style={styles.detailLabel}>
              Premium
            </Text>

            <Text style={styles.detailValue}>
              {getPremium(plan)}
            </Text>
          </View>

          <View style={styles.verticalLine} />

          <View style={styles.detailBox}>
            <Text style={styles.detailLabel}>
              Sum Insured
            </Text>

            <Text style={styles.detailValue}>
              {getSumInsured(plan)}
            </Text>
          </View>
        </View>

        {plan.eligibility && (
          <View style={styles.infoRow}>
            <Ionicons
              name="person-outline"
              size={18}
              color="#287454"
            />

            <Text style={styles.infoText}>
              Age:{" "}
              {plan.eligibility.minAge ??
                "-"}{" "}
              -{" "}
              {plan.eligibility.maxAge ??
                "-"}{" "}
              years
            </Text>
          </View>
        )}

        {plan.specialFeatures &&
          plan.specialFeatures.length > 0 && (
            <View style={styles.featuresContainer}>
              <Text style={styles.featureTitle}>
                Key Features
              </Text>
 
              {plan.specialFeatures.slice(0, 5).filter((feature,featureIndex ) => featureIndex !==3 ).map(
                  (
                    feature,
                    featureIndex
                  ) => (
                    <View key={featureIndex} style={  styles.featureRow}>
                      
                        <Ionicons name="checkmark-circle" size={15} color="#287454" />
                      <Text style={ styles.featureText} numberOfLines={2}>
                        {feature}
                      </Text>
                    </View>
                  )
                )}
            </View>
          )}


        <View style={styles.cardBottom}>
          <View>
            <Text style={styles.verifiedText}>
              {plan.lastVerified
                ? `Verified ${plan.lastVerified}`
                : "Insurance Plan"}
            </Text>
          </View>

          <TouchableOpacity style={styles.viewButton} onPress={() => { console.log( "Selected Plan:",  plan); }}>
            <Text style={styles.viewButtonText}>
              View Plan
            </Text>

          </TouchableOpacity>
        </View>
      </View>
    );
  };

  // if (loading) {
  //   return (
  //     <SafeAreaView style={styles.safeArea}>
  //       <View style={styles.loadingContainer}>
  //         <ActivityIndicator
  //           size="large"
  //           color="#287454"
  //         />

  //         <Text style={styles.loadingText}>
  //           Loading insurance plans...
  //         </Text>
  //       </View>
  //     </SafeAreaView>
  //   );
  // }


  return (
    <SafeAreaView style={styles.safeArea} edges={["top"]}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={ styles.scrollContent} onScroll={handleScroll}scrollEventThrottle={16}>

        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
            <Ionicons
              name="arrow-back"
              size={22}
              color="#103D43"
            />
          </TouchableOpacity>

          <View style={styles.headerTitleContainer}>
            <Text style={styles.headerTitle}>
              Investment
            </Text>

            <Text style={styles.headerSubtitle}>
              Grow your wealth, secure your future
            </Text>
          </View>

          <TouchableOpacity
            style={styles.profileButton}
          >
            {/* <Ionicons
              name="person-outline"
              size={21}
              color="#287454"
            /> */}
          </TouchableOpacity>
        </View>

        <ImageBackground source={require("@/assets/images/heroimage.png")} style={styles.heroCard} imageStyle={styles.heroImage}>
          <View style={styles.heroOverlay}>
            <View style={styles.heroContent}>
              <Text style={styles.heroTitle}>
                Smart Investments for a
                Better Tomorrow
              </Text>

              <Text style={styles.heroDescription}>
                {'Explore insurance plans and secure\nyour future with the right protection'}
              </Text>


              <TouchableOpacity style={styles.heroButton} onPress={() => setSelectedCategory("all")}>
                <Text style={styles.heroButtonText}>
                  View All Plans
                </Text>

                <Ionicons
                  name="arrow-forward"
                  size={16}
                  color="#eaf5f0"
                />
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>

        <View style={styles.tabsWrapper}>
          <ScrollView horizontal showsHorizontalScrollIndicator=
            {
              false
            }
            contentContainerStyle={ styles.tabsContainer}>
            {CATEGORY_TABS.map(
              (tab) => {
                const isSelected = selectedCategory === tab.key;

                return (
                  <TouchableOpacity key={tab.key} style={[ styles.categoryTab, isSelected && styles.selectedCategoryTab,]}
                    onPress={() => setSelectedCategory( tab.key)}>
                      <Ionicons
                       name={tab.icon}
                       size={16}
                       color={isSelected ? "#FFFFFF" : "#55766A"}
                      style={styles.categoryTabIcon}/>
                    <Text
                      style={[ styles.categoryTabText, isSelected && styles.selectedCategoryTabText,]}>
                      {tab.label}
                    </Text>
                  </TouchableOpacity>
                );
              }
            )}
          </ScrollView>
        </View>

        <View style={styles.sectionHeader}>
          <View>
            <Text style={styles.sectionTitle}>
              Insurance Plans
            </Text>

            
          </View>

          
        </View>

        {error ? (
          <View style={styles.errorContainer}>
            <Ionicons
              name="alert-circle-outline"
              size={24}
              color="#B3261E"
            />

            <Text style={styles.errorText}>
              {error}
            </Text>

            <TouchableOpacity style={styles.retryButton}
              onPress=
              {
                fetchAllInsurancePlans
              }>
              <Text
                style={styles.retryText}
              >
                Retry
              </Text>
            </TouchableOpacity>
          </View>
        ) : null}

        {!error && filteredPlans.length > 0 ? (
          <View>
            {filteredPlans.map(
              renderPlan
            )}
          </View>
        ) : !error ? (
          <View style={ styles.emptyContainer }>
            <Ionicons
              name="document-text-outline"
              size={45}
              color="#8AA99A"
            />

            <Text style={styles.emptyTitle} >
              No plans available
            </Text>

            <Text style={styles.emptyText} >
              No insurance plans were found
              for this category.
            </Text>
          </View>
        ) : null}
      </ScrollView>
      <Animated.View
  pointerEvents="none"
  style={[
    styles.scrollIndicator,
    {
      opacity: arrowOpacity,
      transform: [
        {
          translateY: arrowTranslateY,
        },
      ],
    },
  ]}
>
  <View style={styles.scrollArrowCircle}>
    <Ionicons
      name="chevron-down"
      size={21}
      color="#287454"
    />
  </View>
</Animated.View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F5FAF7",
  },

  scrollContent: {
    paddingBottom: 30,
  },
  scrollIndicator: {
  position: "absolute",
  left: 0,
  right: 0,
  bottom: 100,

  height: 44,

  alignItems: "center",
  justifyContent: "center",

  zIndex: 999,
  elevation: 999,
},
scrollArrowCircle: {
  width: 42,
  height: 42,
  borderRadius: 21,

  backgroundColor: "#FFFFFF",

  alignItems: "center",
  justifyContent: "center",

  borderWidth: 1,
  borderColor: "#DDEBE3",

  shadowColor: "#103D43",
  shadowOffset: {
    width: 0,
    height: 3,
  },
  shadowOpacity: 0.15,
  shadowRadius: 8,

  elevation: 6,
},

  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 16,
  },

  backButton: {
    width: 42,
    height: 42,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 9,
    marginLeft: -8
  },

  headerTitleContainer: {
    flex: 1,
  },

  headerTitle: {
    fontSize: 22,
    fontFamily: 'SoraBold',
    color: "#103D43",
  },

  headerSubtitle: {
    fontSize: 12,
    color: "#0f1514",
    fontFamily: 'DMSanRegular',
    marginTop: 2,
  },

  profileButton: {
    width: 42,
    height: 42,
    alignItems: "center",
    justifyContent: "center",
  },

  heroCard: {
    marginHorizontal: 20,
    height: 210,
    borderRadius: 24,
    overflow: "hidden",
    shadowColor: '#103D43',
    shadowRadius: 15,
    shadowOpacity: 0.6,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },

  heroImage: {
    borderRadius: 24,
  },

  heroOverlay: {
    flex: 1,
    justifyContent: "center",
  },

  heroContent: {
    paddingHorizontal: 22,
    width: "80%",
  },

  heroTitle: {
    fontSize: 20,
    lineHeight: 27,
    fontFamily: 'SoraBold',
    color: "#111311",
  },

  heroDescription: {
    fontSize: 12,
    lineHeight: 18,
    color: "#070807",
    fontFamily: 'DMSanRegular',
    marginTop: 8,
  },

  heroButton: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#367051",
    paddingHorizontal: 14,
    paddingVertical: 9,
    borderRadius: 20,
    marginTop: 14,
  },

  heroButtonText: {
    fontSize: 12,
    fontFamily: 'DMSanSemibold',
    color: "#eaf5f0",
    marginRight: 6,
  },

  tabsWrapper: {
    marginTop: 20,
  },

  tabsContainer: {
    paddingHorizontal: 20,
    gap: 10,
  },

  categoryTab: {
   flexDirection: "row",
  alignItems: "center",
  paddingHorizontal: 16,
  paddingVertical: 10,
  borderRadius: 20,
  backgroundColor: "#E8F2EC",
  },
  categoryTabIcon: {
  marginRight: 7,
},

  selectedCategoryTab: {
    backgroundColor: "#287454",
  },

  categoryTabText: {
    fontSize: 12,
    fontFamily: 'DMSanSemibold',
    color: "#55766A",
  },

  selectedCategoryTabText: {
    color: "#FFFFFF",
  },

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 24,
    marginBottom: 12,
  },

  sectionTitle: {
    fontSize: 19,
    fontFamily: 'SoraBold',
    color: "#103D43",
  },

  sectionSubtitle: {
    fontSize: 12,
    color: "#78928A",
    marginTop: 3,
  },

  planCard: {
    backgroundColor: "#FFFFFF",
    marginHorizontal: 20,
    marginBottom: 14,
    padding: 17,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#E2EEE7",
  },

  planTopRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  insurerIcon: {
    width: 44,
    height: 44,
    borderRadius: 13,
    alignItems: "center",
    justifyContent: "center",
  },
  insurerLogo: {
  width: 50,
  height: 50,
},

  insurerInitial: {
    fontSize: 18,
    fontWeight: "800",
    color: "#287454",
  },

  planTitleContainer: {
    flex: 1,
    marginTop: 10,
    marginLeft: 15,
    marginRight: 8,
  },

  insurerName: {
    fontSize: 14,
    color: "#103D43",
    fontFamily: 'DMSanSemibold'
    },

  planName: {
    fontSize: 15,
    color: "#103D43",
    fontFamily: 'SoraSemibold',
    marginTop: 3,
  },

  categoryBadge: {
    backgroundColor: "#F0F7F3",
    paddingHorizontal: 8,
    paddingVertical: 5,
    marginTop: -13,
    borderRadius: 8,
    maxWidth: 95,
  },

  categoryBadgeText: {
    fontSize: 8,
    fontFamily: 'DMSanSemibold',
    color: "#287454",
    textAlign: "center",
  },

  subCategory: {
    fontSize: 12,
    color: "#32423d",
    marginTop: 10,
    textTransform: "capitalize",
    fontFamily: 'DMSanRegular'
  },

  detailsContainer: {
    flexDirection: "row",
    backgroundColor: "#e2f0e8",
    borderRadius: 13,
    marginTop: 13,
    paddingVertical: 11,
  },

  detailBox: {
    flex: 1,
    paddingHorizontal: 10,
  },

  verticalLine: {
    width: 1,
    backgroundColor: "#D7E7DE",
  },

  detailLabel: {
    fontSize: 11,
    color: "#475452",
    marginBottom: 4,
    fontFamily: 'DMSanRegular'
  },

  detailValue: {
    fontSize: 12,
    color: "#103D43",
    fontFamily: 'DMSanSemibold'
  },

  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
  },

  infoText: {
    fontSize: 12,
    color: "#55766A",
    marginLeft: 7,
    fontFamily: 'DMSanRegular'
  },

  featuresContainer: {
    marginTop: 15,
  },

  featureTitle: {
    fontSize: 13,
    fontFamily: 'DMSanSemibold',
    color: "#103D43",
    marginBottom: 5,
  },

  featureRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginTop: 4,
  },

  featureText: {
    flex: 1,
    fontSize: 12,
    color: "#55766A",
    marginLeft: 6,
    lineHeight: 15,
    fontFamily: 'DMSanRegular'
  },

  cardBottom: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 15,
    paddingTop: 12,
  },

  verifiedText: {
    fontSize: 9,
    color: "#8AA99A",
    fontFamily: 'DMSanRegular'
  },

  viewButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#287454",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 10,
  },

  viewButtonText: {
    fontSize: 10,
    fontFamily: 'DMSanSemibold',
    color: "#FFFFFF",
    marginRight: 5,
  },

  loadingContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  loadingText: {
    marginTop: 12,
    fontSize: 14,
    color: "#55766A",
  },

  errorContainer: {
    marginHorizontal: 20,
    backgroundColor: "#FFF4F3",
    borderRadius: 14,
    padding: 15,
    alignItems: "center",
  },

  errorText: {
    color: "#B3261E",
    fontSize: 12,
    textAlign: "center",
    marginTop: 7,
  },

  retryButton: {
    backgroundColor: "#287454",
    paddingHorizontal: 18,
    paddingVertical: 8,
    borderRadius: 10,
    marginTop: 10,
  },

  retryText: {
    color: "#FFFFFF",
    fontSize: 11,
    fontWeight: "700",
  },

  emptyContainer: {
    marginHorizontal: 20,
    marginTop: 30,
    alignItems: "center",
    padding: 30,
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
  },

  emptyTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#103D43",
    marginTop: 12,
  },

  emptyText: {
    fontSize: 12,
    color: "#78928A",
    textAlign: "center",
    marginTop: 5,
  },
});
