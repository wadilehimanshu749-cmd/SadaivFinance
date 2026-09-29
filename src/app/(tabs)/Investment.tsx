import React, { useEffect, useMemo, useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ActivityIndicator, ImageBackground,} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
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
  networkHospitals?: number;
  renewability?: string;
  claimSettlement?: any;
  confidenceScore?: string;
  lastVerified?: string;
  sourceUrl?: string;
}

const CATEGORY_TABS: {
  key: Category;
  label: string;
}[] = [
  {
    key: "all",
    label: "All",
  },
  {
    key: "health",
    label: "Health Insurance",
  },
  {
    key: "term-life",
    label: "Term Life",
  },
  {
    key: "motor",
    label: "Motor Insurance",
  },
  {
    key: "travel",
    label: "Travel Insurance",
  },
];

export default function Investment() {
  const [plans, setPlans] = useState<InsurancePlan[]>([]);
  const [selectedCategory, setSelectedCategory] =
    useState<Category>("all");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

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
            <Text style={styles.insurerInitial}>
              {plan.insurerName
                ?.charAt(0)
                ?.toUpperCase() || "I"}
            </Text>
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
              size={16}
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

              {plan.specialFeatures.slice(0, 3).map(
                  (
                    feature,
                    featureIndex
                  ) => (
                    <View key={featureIndex} style={  styles.featureRow}>
                      

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

  if (loading) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.loadingContainer}>
          <ActivityIndicator
            size="large"
            color="#287454"
          />

          <Text style={styles.loadingText}>
            Loading insurance plans...
          </Text>
        </View>
      </SafeAreaView>
    );
  }


  return (
    <SafeAreaView style={styles.safeArea} edges={["top"]}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={ styles.scrollContent}>

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
            <Ionicons
              name="person-outline"
              size={21}
              color="#287454"
            />
          </TouchableOpacity>
        </View>

        <ImageBackground source={require("@/assets/images/investment.png")} style={styles.heroCard} imageStyle={styles.heroImage}>
          <View style={styles.heroOverlay}>
            <View style={styles.heroContent}>
              <Text style={styles.heroTitle}>
                Smart Investments for a
                Better Tomorrow
              </Text>

              <Text style={styles.heroDescription}>
                Explore insurance plans and
                secure your future with the right protection.
              </Text>

              <TouchableOpacity style={styles.heroButton} onPress={() => setSelectedCategory("all")}>
                <Text style={styles.heroButtonText}>
                  View All Plans
                </Text>

                <Ionicons
                  name="arrow-forward"
                  size={16}
                  color="#287454"
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
                const isSelected =
                  selectedCategory ===
                  tab.key;

                return (
                  <TouchableOpacity key={tab.key} style={[ styles.categoryTab, isSelected && styles.selectedCategoryTab,]}
                    onPress={() =>
                      setSelectedCategory(
                        tab.key)}>
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

            <Text
              style={styles.emptyTitle}
            >
              No plans available
            </Text>

            <Text style={styles.emptyText} >
              No insurance plans were found
              for this category.
            </Text>
          </View>
        ) : null}
      </ScrollView>
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
    marginRight: 12,
  },

  headerTitleContainer: {
    flex: 1,
  },

  headerTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#103D43",
  },

  headerSubtitle: {
    fontSize: 12,
    color: "#78928A",
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
    width: "72%",
  },

  heroTitle: {
    fontSize: 21,
    lineHeight: 27,
    fontWeight: "800",
    color: "#111311",
  },

  heroDescription: {
    fontSize: 12,
    lineHeight: 18,
    color: "#111311",
    marginTop: 8,
  },

  heroButton: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 14,
    paddingVertical: 9,
    borderRadius: 20,
    marginTop: 14,
  },

  heroButtonText: {
    fontSize: 12,
    fontWeight: "700",
    color: "#287454",
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
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: "#E8F2EC",
  },

  selectedCategoryTab: {
    backgroundColor: "#287454",
  },

  categoryTabText: {
    fontSize: 12,
    fontWeight: "600",
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
    fontWeight: "800",
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
    backgroundColor: "#E7F3EC",
    alignItems: "center",
    justifyContent: "center",
  },

  insurerInitial: {
    fontSize: 18,
    fontWeight: "800",
    color: "#287454",
  },

  planTitleContainer: {
    flex: 1,
    marginLeft: 11,
    marginRight: 8,
  },

  insurerName: {
    fontSize: 11,
    color: "#78928A",
    fontWeight: "600",
  },

  planName: {
    fontSize: 15,
    color: "#103D43",
    fontWeight: "800",
    marginTop: 3,
  },

  categoryBadge: {
    backgroundColor: "#F0F7F3",
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 8,
    maxWidth: 95,
  },

  categoryBadgeText: {
    fontSize: 8,
    fontWeight: "700",
    color: "#287454",
    textAlign: "center",
  },

  subCategory: {
    fontSize: 11,
    color: "#78928A",
    marginTop: 10,
    textTransform: "capitalize",
  },

  detailsContainer: {
    flexDirection: "row",
    backgroundColor: "#F5FAF7",
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
    fontSize: 10,
    color: "#78928A",
    marginBottom: 4,
  },

  detailValue: {
    fontSize: 12,
    color: "#103D43",
    fontWeight: "700",
  },

  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
  },

  infoText: {
    fontSize: 11,
    color: "#55766A",
    marginLeft: 7,
  },

  featuresContainer: {
    marginTop: 12,
  },

  featureTitle: {
    fontSize: 11,
    fontWeight: "700",
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
    fontSize: 10,
    color: "#55766A",
    marginLeft: 6,
    lineHeight: 15,
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
    fontWeight: "700",
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
