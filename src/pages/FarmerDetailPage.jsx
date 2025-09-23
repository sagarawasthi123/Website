import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { Badge } from "../components/ui/Badge";
import { Sidebar } from "../components/Sidebar";
import { ArrowLeft, MapPin, Phone, Calendar, User, Menu } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function FarmerDetailPage() {
  const { t } = useTranslation();
  const { id } = useParams();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Mock farmer data
  const farmer = {
    id: id,
    name: "Rajesh Kumar Patel",
    district: "Cuttack",
    village: "Banki",
    phone: "+91 9876543210",
    landSize: "2.5 acres",
    crops: ["Rice", "Wheat"],
    registrationDate: "2024-01-15",
    status: "Active",
    kccNumber: "KCC001234567",
    address: "Banki, Cuttack",
    aadharNumber: "1234-5678-9012",
    bankAccount: "SBI Bank - 1234567890",
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800 border-green-200";
      case "Pending":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "Inactive":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <div className="flex h-screen bg-background">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-card border-b border-border px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate("/farmers")}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              {t("farmer.backToList")}
            </Button>
            <div>
              <h1 className="text-xl font-semibold text-foreground">
                {t("farmer.title")}
              </h1>
              <p className="text-sm text-muted-foreground">
                {t("farmer.id")}: {farmer.id}
              </p>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Farmer Profile Card */}
          <Card className="animate-in fade-in-0 slide-in-from-top-4 duration-500">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                    <User className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">{t(`farmers.names.${farmer.id}`)}</CardTitle>
                    <CardDescription>
                      {t("farmer.kcc")}: {farmer.kccNumber}
                    </CardDescription>
                  </div>
                </div>
                <Badge
                  variant="outline"
                  className={`text-sm ${getStatusColor(farmer.status)}`}
                >
                  {t(
                    `status.${farmer.status.toLowerCase?.() || farmer.status}`
                  )}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">
                        {t("farmer.location")}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {t("farmer.address")}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">
                        {t("farmer.contact")}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {farmer.phone}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">
                        {t("farmer.registrationDate")}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {farmer.registrationDate}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium">
                      {t("farmer.landSize")}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {farmer.landSize}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">{t("farmer.crops")}</p>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {farmer.crops.map((crop) => (
                        <Badge key={crop} variant="outline" className="text-xs">
                           {farmer.crops.map(crop => t(`farmers.crops.${crop.toLowerCase()}`)).join(", ")}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium">{t("farmer.aadhar")}</p>
                    <p className="text-sm text-muted-foreground">
                      {farmer.aadharNumber}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">
                      {t("farmer.bankAccount")}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {farmer.bankAccount}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Additional Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="animate-in fade-in-0 slide-in-from-left-4 duration-700 delay-200">
              <CardHeader>
                <CardTitle className="text-lg">
                  {t("farmer.cropHistory")}
                </CardTitle>
                <CardDescription>{t("farmer.cropHistoryDesc")}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                    <div>
                      <p className="font-medium">
                        {t("farmer.sample.riceKharif")}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {t("farmer.sample.acres1_2")}
                      </p>
                    </div>
                    <Badge variant="outline">{t("status.completed")}</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                    <div>
                      <p className="font-medium">
                        {t("farmer.sample.wheatRabi")}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {t("farmer.sample.acres1_3")}
                      </p>
                    </div>
                    <Badge variant="outline">{t("status.inProgress")}</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="animate-in fade-in-0 slide-in-from-right-4 duration-700 delay-300">
              <CardHeader>
                <CardTitle className="text-lg">
                  {t("farmer.govtSchemes")}
                </CardTitle>
                <CardDescription>{t("farmer.govtSchemesDesc")}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                    <div>
                      <p className="font-medium">PM-KISAN</p>
                      <p className="text-sm text-muted-foreground">
                        {t("farmer.sample.pmKisanAmount")}
                      </p>
                    </div>
                    <Badge variant="outline">{t("status.active")}</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                    <div>
                      <p className="font-medium">
                        {t("farmer.sample.soilHealthCard")}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {t("farmer.sample.validUntil2025")}
                      </p>
                    </div>
                    <Badge variant="outline">{t("status.active")}</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
