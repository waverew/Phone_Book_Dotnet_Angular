#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["Phone_Book_Dotnet_Angular/Phone_Book_Dotnet_Angular.csproj", "Phone_Book_Dotnet_Angular/"]
RUN dotnet restore "Phone_Book_Dotnet_Angular/Phone_Book_Dotnet_Angular.csproj"
COPY . .
WORKDIR "/src/Phone_Book_Dotnet_Angular"
RUN dotnet build "Phone_Book_Dotnet_Angular.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Phone_Book_Dotnet_Angular.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Phone_Book_Dotnet_Angular.dll"]