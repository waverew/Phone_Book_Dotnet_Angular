FROM node:lts AS node-build
COPY --from=node:lts /usr/local /usr/local


FROM mcr.microsoft.com/dotnet/sdk:6.0 AS backend-build
COPY --from=node-build /usr/local /usr/local

WORKDIR /backend
COPY ./Phone_Book_Dotnet_Angular.csproj ./
RUN dotnet restore
COPY . ./
RUN dotnet publish -c Release -o out --verbosity detailed

FROM node:14 AS frontend-build
WORKDIR /frontend
COPY ./ClientApp/package*.json ./
RUN npm ci
COPY ./ClientApp/ ./
RUN npm run build --prod

FROM mcr.microsoft.com/dotnet/aspnet:6.0
WORKDIR /app
COPY --from=backend-build /backend/out .
COPY --from=frontend-build /frontend/dist /app/wwwroot
ENTRYPOINT ["dotnet", "Phone_Book_Dotnet_Angular.dll"]
